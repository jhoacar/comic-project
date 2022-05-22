import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    avatar: String
});

const customFindOne = async (objectToFind: Object) => {
    return await User.findOne(objectToFind).exec();
};

const customCreate = async (objectToCreate: Object) => {
    const user = new User(objectToCreate);
    await user.save();
    return user;
};

const customUpdate = async (dataToUpdate: Object, objectToFind: Object) => {
    return await User.updateOne(objectToFind, dataToUpdate);
};

UserSchema.methods.customFindOne = customFindOne;
UserSchema.methods.customCreate = customCreate;
UserSchema.methods.customUpdate = customUpdate;


console.log("Using model user with mongodb");

const User = model('User', UserSchema);

export default User;
