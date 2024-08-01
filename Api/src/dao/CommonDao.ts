export {};
const {NodeVM} = require('vm2');
import * as fs from 'fs';
import * as xml2js from 'xml2js';
import * as iconv from 'iconv-lite';

class CommonDao {
    processRunFunction1 = async (res: any, req: any) => {
        const {function: functionCode, data} = req.body;

        if (!functionCode) {
            return res.status(400).send('No function provided');
        }

        // Create a VM instance
        const vm = new NodeVM({
            console: 'inherit',
            sandbox: {}
        });

        try {
            // Create a script that includes the provided function
            const script = `module.exports = async function(data) {
                ${functionCode}
            }`;

            // Run the script in the VM and get the exported function
            const toExecute = vm.run(script);

            // Call the function and get the result
            const result = await toExecute(data);
            console.log(result);

            return result;
        } catch (e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            throw new Error(e);
        }
    }

    processValidateSingle = async (req: any) => {
        let {elementSeperator, data} = req.body;

        let finalArray = [];
        let count = 0;
        if (data.length > 0) {
            data = data.replace(/~\u00A0|~\u200B/g, '~');
            const match = data.match(/\*(.)~/);
            let subSegmentSeparator;

            if (match && match[1]) {
                subSegmentSeparator = match[1];
            }

            let subSegmentSplitted = data.split(subSegmentSeparator);
            let mainData = subSegmentSplitted[0];
            let segmentSeperator = subSegmentSplitted[1];
            let splitArray = segmentSeperator ? [...mainData.split(elementSeperator), segmentSeperator] : [...mainData.split(elementSeperator)];
            let uniqueArray = splitArray.filter(Boolean);

            for (let [idx, value] of uniqueArray.entries()) {
                value = value.replace(/ /g, 'x');
                let lengthValue = value.length;
                finalArray.push({[idx + 1]: value + ' = ' + lengthValue});
                count = count + lengthValue;
            }
            finalArray.push({[`The total length of the ${uniqueArray[0]} is `]: splitArray.length - 1 + count});
            return finalArray;
        }
    }

    processChangeFieldName = async (req: any) => {
        try {
            let field = req.body;
            let seperator = req.headers.seperator ? req.headers.seperator : '\r\n';
            let elementNameArray = field.split(seperator);
            elementNameArray = elementNameArray.filter(Boolean);
            console.log(elementNameArray.length);
            let xsdElementArray = [];
            let finalSegments = "";

            for (const [idx, element] of elementNameArray.entries()) {
                // let elementName = element.replace(/([\w])[\s|-|\/]([\w])/g, '$1_$2');
                let elementName = element.replace(/[\s.,*\/\-\|\\]+/g, '_');
                console.log(elementName);
                xsdElementArray.push(await this.getXsdElement(elementName, idx + 1));
                finalSegments = xsdElementArray.join('');
            }

            console.log(xsdElementArray);

            // fs.writeFileSync('BeforeTransformXmlSegment.txt', JSON.stringify(elementNameArray));
            // fs.writeFileSync('AfterTransformXmlSegment.txt', finalSegments);

            return finalSegments;
        } catch (e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            throw new Error(e);
        }
    }

    getXsdElement = async function (name: any, index: any) {
        return `<xs:element name="${name}" type="xs:string"><xs:annotation><xs:appinfo><b:fieldInfo justification="left" sequence_number="${index}" /></xs:appinfo></xs:annotation></xs:element>`
    }

    processNames = (data: string,req:any): string[][] => {
        let namesList: string[][] = [];
        if (data.trim().includes(',')) {
            let seperator = req.headers?.seperator ? req.headers?.seperator : ',';
            let inputList = data.split(seperator);
            for (let a of inputList) {
                let names = a.trim().split('\r\n');
                namesList.push(names);
            }
        } else {
            let names = data.trim().split('\r\n');
            namesList.push(names);
        }
        return namesList;
    };

    stripBom = (content: string): string => {
        if (content.charCodeAt(0) === 0xFEFF) {
            return content.slice(1);
        }
        return content;
    };

    updateXsdFile = async (xsdDataBuffer: any, newNamesList: any[], updatedXsdPath: string) => {
        try {
            // Read the XSD file with UTF-16 encoding and convert it to a UTF-8 string
            let xsdData = iconv.decode(xsdDataBuffer, 'utf-16');
            xsdData = this.stripBom(xsdData);

            const parser = new xml2js.Parser({explicitArray: false});
            const builder = new xml2js.Builder();

            const result = await parser.parseStringPromise(xsdData).catch((err) => {
                throw new Error(`Error parsing XSD file: ${err.message}`);
            });

            const elements = result['xs:schema']['xs:element'] || [];
            const transaction = elements['xs:complexType']['xs:sequence']['xs:element'];
            const isTransaction = Object.hasOwn(transaction["$"], 'name') ? transaction["$"]["name"] : '';

            let childRecordList: any = [];
            let transactionArray: any = [];
            if (isTransaction) {
                transactionArray = transaction['xs:complexType']['xs:sequence']['xs:element'];
                if (transactionArray.length > 0) {
                    transactionArray.forEach((element: any, index: number) => {
                        childRecordList.push({name: Object.hasOwn(element["$"], 'name') ? element["$"]["name"] : '', idx: index});
                    });
                }
            }

            for (let childRecord of childRecordList) {
                const foundObject = transactionArray.find((a: any) => a["$"] && a["$"]["name"].toLowerCase() === childRecord["name"].toLowerCase());
                // const foundObject = transactionArray.find((a: any) => a.Object.hasOwn(a.$, childRecord.name));
                if (foundObject) {
                    let fieldElementList = foundObject['xs:complexType']['xs:sequence']['xs:element'];
                    let sequenceNumber = foundObject['xs:annotation']['xs:appinfo']['b:recordInfo']["$"]["sequence_number"];
                    if (fieldElementList.length > 0) {
                        for (let [idx, elementName] of newNamesList[sequenceNumber - 1].entries()) {
                            fieldElementList[idx]['$']['name'] = elementName.trim() !== '' ? elementName.trim().replace(/[\s.,*\/\-\|\\]+/g, '_') : fieldElementList[idx]['$']['name'];
                        }
                    }
                }
            }

            const updatedXsdData = builder.buildObject(result);
            if (!fs.existsSync(updatedXsdPath)) {
                fs.writeFileSync(updatedXsdPath, updatedXsdData, 'utf8');
            } else {
                return updatedXsdData;
            }
        } catch (error: any) {
            console.error('Error updating XSD file:', error.message);
            throw error; // Re-throw the error to handle it in the calling function
        }
    };

    editXsdColumn = async (xsdDataBuffer: string, nameFileContent: string, updatedXsdFilePath: string,req:any) => {
        try {
            let newNames: any = await this.processNames(nameFileContent,req);
            newNames = newNames.map((innerArray: any) => innerArray.filter(Boolean));
            return await this.updateXsdFile(xsdDataBuffer, newNames, updatedXsdFilePath);
        } catch (error: any) {
            console.error('Error editing XSD column:', error.message);
            throw error; // Re-throw the error to handle it in the calling function
        }
    };

}

module.exports = CommonDao;



