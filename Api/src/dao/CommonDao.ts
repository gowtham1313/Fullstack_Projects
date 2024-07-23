export {};
const {NodeVM} = require('vm2');
let fs = require('fs');

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
                let elementName = element.replace(/([\w])[\s|-|\/]([\w])/g, '$1_$2');
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
}

module.exports = CommonDao;

// let segmentSeperator = data.slice(data.length - 1)
// let segment = data.split(segmentSeperator)[0];
// let splitArray = [...segment.split('*'), segmentSeperator];
// value = value.replace(/~\u00A0|\u00A0|~\u200B|\u200B/g, '~');
// let splitArray = data.split(segmentSeperator);


