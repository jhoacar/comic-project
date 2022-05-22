import { Schema, model } from "mongoose";
import { UserSchema } from "..";

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

    public static async customFindAll(): Promise<UserSchema[]> {

        const users = await User.Model.find();
        return users.map((user: any): UserSchema => {
            const name: string = user.name;
            const email: string = user.email;
            const password: string = user.password;
            const avatar: string = user.avatar;
            const image: string = user.image;
            return { name, email, password, avatar, image };
        })
    }

    public static async customCreate(objectToCreate: Object) {
        const user = new User.Model(objectToCreate);
        await user.save();
        return user;
    };

    public static async customUpdate(dataToUpdate: Object, objectToFind: Object) {
        return await User.Model.updateOne(objectToFind, dataToUpdate);
    };

};
