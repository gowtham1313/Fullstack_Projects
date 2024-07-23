import {commonAPIResponse} from "../domain/CommonAPIResponse";
import {StatusCodes} from 'http-status-codes';

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
}

module.exports = new CommonController();