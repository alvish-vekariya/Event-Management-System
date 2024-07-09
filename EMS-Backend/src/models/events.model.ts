import mongoose from "mongoose";
import { IeventModel } from "../interfaces";

const eventSchema = new mongoose.Schema<IeventModel>({
    name: {
        type : String,
        required : [true, 'event name is required!!']
    },
    location : {
        type : String,
        required : [true, 'location is required!!']
    },
    event_type : {
        type : String,
        required : [true, 'event type is required!'],
        enum : ['personal', 'corporate', 'social', 'educational', 'entertainment', 'sports']
    },
    description : {
        type: String,
        required : [true, 'event description is required!']
    },
    fees: {
        type : Number,
        required : [true, 'fees is required!']
    },
    date : {
        type : Date,
        required : [true, 'event date is required!']
    },
    time : {
        type: String,
        required :[true, 'event time is requiree!']
    },
    event_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'user is required!'],
        ref: 'users'
    }
},{
    timestamps : true
})


export const eventModel = mongoose.model('events', eventSchema);