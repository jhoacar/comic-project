const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String
});

console.log("Using model user with mongodb");

const User = mongoose.model('User', UserSchema);

const customFindOne = async (objectToFind) => {
    return await User.findOne(objectToFind).exec();
};

const customCreate = async (objectToCreate) => {
    const user = new User(objectToCreate);
    await user.save();
    return user;
};

const customUpdate = async (dataToUpdate, objectToFind) => {
    return await User.updateOne(objectToFind, dataToUpdate);
};

User.customFindOne = customFindOne;
User.customCreate = customCreate;
User.customUpdate = customUpdate;

module.exports = User;
