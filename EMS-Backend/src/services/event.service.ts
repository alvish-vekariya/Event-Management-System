import { injectable } from "inversify";
import { eventModel } from "../models";
import { IuserModel } from "../interfaces";
import mongoose from "mongoose";

@injectable()
export class eventService{

    async addEvent(bodyData: IuserModel):Promise<object>{
        await eventModel.create(bodyData);
        return {status: true, message: 'event added successfully!!'};
    }

    async deleteEvent(eventId: string):Promise<object>{
        await eventModel.findOneAndDelete({_id:eventId})
        return {status: true, message : 'event deleted successfully!'};
    }

    async editEvent(id: string, bodyData: any):Promise<object>{
        await eventModel.findOneAndUpdate({_id: id},{$set: bodyData})
        return {status: true, message: 'event updated successfully!'};
    }

    async getAllEvents(id: string):Promise<object>{
        const events = await eventModel.find({event_by : {$ne : id}});
        return {status: true, data : events}
    }

    async getEvent(eventId: string):Promise<object>{
        const data = await eventModel.findOne({_id:eventId});
        return {status: true, data: data};
    }

    async getUserEvents(id: string):Promise<object>{
        const data = await eventModel.find({event_by : new mongoose.Types.ObjectId(id)});
        return {status: true, data: data};
    }
}