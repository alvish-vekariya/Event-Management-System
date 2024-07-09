import mongoose from "mongoose";

export interface IuserModel {
    username : string,
    password: string,
    email : string | undefined,
    _id?: mongoose.Schema.Types.ObjectId,
    createdAt ?: Date,
    updatedAt ?: Date
}

export interface IeventModel {
    time : string,
    name : string,
    location : string,
    event_type : string,
    description : string,
    fees : number,
    date : Date,
    event_by : mongoose.Schema.Types.ObjectId,
    _id?: mongoose.Schema.Types.ObjectId,
    createdAt ?: Date,
    updateAt ?: Date
}

export interface IregistrationModel{
    _id ?: mongoose.Schema.Types.ObjectId,
    eventId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    createdAt ?: Date,
    updateAt ?: Date
}