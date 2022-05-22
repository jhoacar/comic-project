import mongoose from "mongoose";
import configuration from '../database';

const uri: string = configuration.mongo.uri || "mongodb://localhost/test";

export default async ()=>{
    await mongoose.connect(uri);
};