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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfile = exports.getAvatars = exports.postUser = void 0;
const models_1 = __importDefault(require("../models"));
const handlePassword_1 = require("../helpers/handlePassword");
const postUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        userData.password = yield (0, handlePassword_1.getHashedPassword)(userData.password);
        const { User } = yield (0, models_1.default)();
        const user = yield User.customCreate(userData);
        delete user.password;
        return res.json({
            message: "User created succesfully",
            body: user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.json({ error: error });
    }
});
exports.postUser = postUser;
const getAvatars = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { User } = yield (0, models_1.default)();
        const allUser = yield User.customFindAll({});
        const avatars = allUser.map((user) => user.avatar);
        return res.json({
            message: "All avatars in the system",
            body: avatars
        });
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.json({ error: error });
    }
});
exports.getAvatars = getAvatars;
const getProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.user;
        const { User } = yield (0, models_1.default)();
        const user = yield User.customFindOne({ email });
        return res.json({
            message: "Profile information for user",
            body: user
        });
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.json({ error: error });
    }
});
exports.getProfile = getProfile;
