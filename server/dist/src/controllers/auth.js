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
exports.handleLogin = void 0;
const models_1 = __importDefault(require("../models"));
const handleJWT_1 = require("../helpers/handleJWT");
const handlePassword_1 = require("../helpers/handlePassword");
const handleLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const { User } = yield (0, models_1.default)();
        const user = yield User.customFindOne({ email });
        if (!user) {
            res.status(401);
            return res.json({ error: "User not registered" });
        }
        const isAuthorized = yield (0, handlePassword_1.comparePassword)(password, user.password);
        if (!isAuthorized) {
            res.status(401);
            return res.json({ error: "User not authorized" });
        }
        const payload = {
            email: user.email,
            name: user.name
        };
        const token = (0, handleJWT_1.getJsonWebToken)(payload);
        return res.json({
            message: "Logueado exitosamente",
            body: {
                token: token
            }
        });
    }
    catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });
    }
});
exports.handleLogin = handleLogin;
