import { controller, httpDelete, httpGet, httpPost } from "inversify-express-utils";
import { loginMiddleware } from "../middlewares";
import { registrationService } from "../services";
import { inject } from "inversify";
import { Request, Response } from "express";

@controller('/registration', loginMiddleware)
export class registrationController {
    constructor(@inject(registrationService) private registrationServices : registrationService){}

    @httpPost('/register')
    async register(req: Request, res: Response){
        try{
            const userId = req.headers.userId as string;
            const eventId = req.query.id as string;
            res.json(await this.registrationServices.register(userId, eventId));
        }catch(err: any){
            res.json({status: false, message: err.message});
        }
    }

    @httpGet('/getRecords')
    async getRecord(req:Request, res: Response){
        try{
            const eventId = req.query.id as string;
            res.json(await this.registrationServices.getRecords(eventId));
        }catch(err: any){
            res.json({status: false, message: err.message});
        }
    }

    @httpDelete('/deleteRecord')
    async deleteRecord(req: Request, res: Response){
        try{

        }catch(err: any){
            res.json({status: false, message: err.message});
        }
    }

}