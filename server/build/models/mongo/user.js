"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String
});
const customFindOne = (objectToFind) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User.findOne(objectToFind).exec();
});
const customCreate = (objectToCreate) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User(objectToCreate);
    yield user.save();
    return user;
});
const customUpdate = (dataToUpdate, objectToFind) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User.updateOne(objectToFind, dataToUpdate);
});
UserSchema.methods.customFindOne = customFindOne;
UserSchema.methods.customCreate = customCreate;
UserSchema.methods.customUpdate = customUpdate;
console.log("Using model user with mongodb");
const User = (0, mongoose_1.model)('User', UserSchema);
exports.default = User;
