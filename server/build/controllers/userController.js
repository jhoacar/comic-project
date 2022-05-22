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
const { userModel } = require("../models");
const { getHashedPassword } = require("../helpers/handlePassword");
const getUsers = (req, res, next) => {
    const userData = req.query;
    return res.json(userData);
};
const postUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        userData.password = yield getHashedPassword(userData.password);
        const user = yield userModel.customCreate(userData);
        delete user.password;
        return res.json({ message: "User created succesfully", data: user });
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.json({ error: error });
    }
});
const putAvatar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const avatarFile = req.avatarPath;
        const userEmail = req.user.email;
        yield userModel.customUpdate({ avatar: avatarFile }, { email: userEmail });
        return res.redirect("/dashboard");
    }
    catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error: error });
    }
});
module.exports = {
    getUsers,
    postUser,
    putAvatar
};
