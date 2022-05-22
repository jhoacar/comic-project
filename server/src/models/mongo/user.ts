import { Schema, model } from "mongoose";

console.log("Using model user with mongodb");

export default class User {

    public static schema = new Schema({
        name: String,
        email: String,
        password: String,
        avatar: String,
        image: String
    });

    public static Model = model('User', User.schema);


    constructor(ObjectToCreate: Object) {
        User.customCreate(ObjectToCreate);
    }

    public static async customFindOne(objectToFind: Object) {
        return await User.Model.findOne(objectToFind).exec();
    };

    public static async customCreate(objectToCreate: Object) {
        const user = new User.Model(objectToCreate);
        await user.save();
        return user;
    };

    public static async customUpdate(dataToUpdate: Object, objectToFind: Object) {
        return await User.Model.updateOne(objectToFind, dataToUpdate);
    };

};
