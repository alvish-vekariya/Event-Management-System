import mongoose from "mongoose";
import { IregistrationModel } from "../interfaces";

const registrationSchema = new mongoose.Schema<IregistrationModel>({
    eventId : {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'eventid is required!!'],
        ref : 'events'
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        required: [true, 'userId is required!'],
        ref : 'users'
    }
},{
    timestamps : true
})

export const registrationModel = mongoose.model('registrations', registrationSchema);