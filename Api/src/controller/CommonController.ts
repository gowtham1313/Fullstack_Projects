import {commonAPIResponse} from "../domain/CommonAPIResponse";
import {StatusCodes} from 'http-status-codes';
import path from 'path';
import * as os from "node:os";

const CommonDao = require('../dao/CommonDao');

class CommonController {

    processSingle = async function (req: any, res: any) {
        try {
            let mainDao = new CommonDao();
            let data = await mainDao.processValidateSingle(req);

            let yvpResponse = new commonAPIResponse(StatusCodes.OK, "PROCESS_SINGLE", " ", "Success", [data]);
            res.status(StatusCodes.OK).send(yvpResponse);
        } catch (e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            let yvpResponse = new commonAPIResponse(StatusCodes.INTERNAL_SERVER_ERROR, "PROCESS_SINGLE", "", e.message, [{"stack_trace": e.stack}]);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(yvpResponse);
        }
    }

    processMulti = async function (req: any, res: any) {
        try {
            let mainDao = new CommonDao();
            let data = await mainDao.processValidateMultiple(req);

            let yvpResponse = new commonAPIResponse(StatusCodes.OK, "PROCESS_MULTIPLE", " ", "Success", [data]);
            res.status(StatusCodes.OK).send(yvpResponse);
        } catch (e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            let yvpResponse = new commonAPIResponse(StatusCodes.INTERNAL_SERVER_ERROR, "PROCESS_MULTIPLE", "", e.message, [{"stack_trace": e.stack}]);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(yvpResponse);
        }
    }

    changeFieldName = async function (req: any, res: any) {
        try {
            let mainDao = new CommonDao();
            let data = await mainDao.processChangeFieldName(req);

            let yvpResponse = new commonAPIResponse(StatusCodes.OK, "CHANGE_FIELD_NAME", " ", "Success", [data]);
            res.status(StatusCodes.OK).send(data);
        } catch (e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            let yvpResponse = new commonAPIResponse(StatusCodes.INTERNAL_SERVER_ERROR, "CHANGE_FIELD_NAME", "", e.message, [{"stack_trace": e.stack}]);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(yvpResponse);
        }
    }

    editXsd = async function (req: any, res: any) {
        try {
            let mainDao = new CommonDao();
            const xsdFileName = req.files?.xsdFile?.[0]?.originalname;
            const namesFileName = req.files?.namesFile?.[0]?.originalname;

            if (!xsdFileName || !namesFileName) {
                res.status(StatusCodes.BAD_REQUEST).send('Missing file uploads.');
                return;
            }

            const xsdDataBuffer = req.files?.xsdFile?.[0]?.buffer;
            const nameFileContent = req.files?.namesFile?.[0]?.buffer.toString();

            const updatedXsdFilePath = req.body?.filePath ? path.join(req.body.filePath, xsdFileName) : path.join(path.resolve(os.homedir(), 'downloads'), xsdFileName);
            let data = await mainDao.editXsdColumn(xsdDataBuffer, nameFileContent, updatedXsdFilePath, req);
            let yvpResponse;
            if (data) {
                yvpResponse = new commonAPIResponse(StatusCodes.OK, "CHANGE_FIELD_NAME", " ", "Success", [data]);
                res.status(StatusCodes.OK).send(data);
            } else {
                yvpResponse = new commonAPIResponse(StatusCodes.OK, "CHANGE_FIELD_NAME", " ", "Success", [{updatedXsdFilePath}]);
                res.status(StatusCodes.OK).send(yvpResponse);
            }
        } catch (e: any) {
            // @ts-ignore
            if (parseInt(process.env.DEBUG) === 1) {
                console.log(e.stack);
            }
            let yvpResponse = new commonAPIResponse(StatusCodes.INTERNAL_SERVER_ERROR, "CHANGE_FIELD_NAME", "", e.message, [{"stack_trace": e.stack}]);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(yvpResponse);
        }
    }
}

module.exports = new CommonController();