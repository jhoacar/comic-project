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
console.log("Using model user with mongodb");
class User {
    constructor(ObjectToCreate) {
        User.customCreate(ObjectToCreate);
    }
    static customFindOne(objectToFind) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.Model.findOne(objectToFind).exec();
        });
    }
    ;
    static customFindAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User.Model.find();
            return users.map((user) => {
                const name = user.name;
                const email = user.email;
                const password = user.password;
                const avatar = user.avatar;
                const image = user.image;
                return { name, email, password, avatar, image };
            });
        });
    }
    static customCreate(objectToCreate) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User.Model(objectToCreate);
            yield user.save();
            return user;
        });
    }
    ;
    static customUpdate(dataToUpdate, objectToFind) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.Model.updateOne(objectToFind, dataToUpdate);
        });
    }
    ;
}
exports.default = User;
User.schema = new mongoose_1.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
    image: String
});
User.Model = (0, mongoose_1.model)('User', User.schema);
;
