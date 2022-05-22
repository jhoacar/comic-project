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
const { comparePassword } = require("../helpers/handlePassword");
const { getJsonWebToken } = require("../helpers/handleJWT");
const handleLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel.customFindOne({ email });
        if (!user) {
            res.status(401);
            return res.json({ error: "User not registered" });
        }
        const isAuthorized = comparePassword(password, user.password);
        if (!isAuthorized) {
            res.status(401);
            return res.json({ error: "User not authorized" });
        }
        const payload = {
            email: user.email,
            name: user.name
        };
        const token = getJsonWebToken(payload);
        return res.json({});
    }
    catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });
    }
});
module.exports = {
    handleLogin
};
