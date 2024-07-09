import { injectable } from "inversify";
import { registrationModel } from "../models";

@injectable()
export class registrationService{
    async register(user: string, event: string):Promise<object>{
        await registrationModel.create({userId: user, eventId : event});
        return {status: true, message:'registration done!'};
    }
    async delete():Promise<object>{
        return {}
    }
    async getRecords(id: string):Promise<object>{
        const data = await registrationModel.find({eventId: id});
        return {status: true, data: data};
    }
}