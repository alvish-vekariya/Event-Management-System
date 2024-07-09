import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { eventService } from "../services";
import { Request, Response } from "express";
import { IuserModel } from "../interfaces";
import { loginMiddleware } from "../middlewares";

@controller('/event', loginMiddleware)
export class eventController{
    constructor(@inject(eventService) private eventServices : eventService){}

    @httpPost('/addEvent')
    async addEvent(req: Request, res: Response){
        try{
            let bodyData = req.body;
            bodyData = {
                ...bodyData,
                event_by : req.headers.userId
            }
            res.json(await this.eventServices.addEvent(bodyData));
        }catch(err: any){
            res.json({status: false, message: err.message})
        }
    }

    @httpPut('/editEvent')
    async editEvent(req: Request, res: Response){
        try{
            const bodyData = req.body;
            const id = req.query.id as string;
            res.json(await this.eventServices.editEvent(id, bodyData));
        }catch(err: any){
            res.json({status: false, message: err.message})
        }
    }

    @httpDelete('/deleteEvent')
    async deleteEvent(req: Request, res: Response){
        try{
            const id = req.query.id as string;
            res.json(await this.eventServices.deleteEvent(id));
        }catch(err: any){
            res.json({status: false, message: err.message})
        }
    }

    @httpGet('/getAllEvent')
    async getAllEvent(req: Request, res:Response){
        try{
            const id = req.headers.userId as string;
            res.json(await this.eventServices.getAllEvents(id));
        }catch(err: any){
            res.json({status: false, message: err.message})
        }
    }

    @httpGet('/getEvent')
    async getEvent(req: Request, res:Response){
        try{
            const eventId = req.query.id as string;
            res.json(await this.eventServices.getEvent(eventId));
        }catch(err: any){
            res.json({status: false, message: err.message})
        }
    }

    @httpGet('/getUserEvents')
    async getUserEvents(req: Request, res: Response){
        try{
            const id = req.headers.userId as string;
            res.json(await this.eventServices.getUserEvents(id));
        }catch(err: any){
            res.json({status: false, message: err.message})
        }
    }
}