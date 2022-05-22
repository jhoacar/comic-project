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
exports.postUser = void 0;
const models_1 = require("../models");
const { getHashedPassword } = require("../helpers/handlePassword");
const postUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        userData.password = yield getHashedPassword(userData.password);
        const Model = yield models_1.User;
        const user = yield Model.customCreate(userData);
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
