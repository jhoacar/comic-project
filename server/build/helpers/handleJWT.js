"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayloadData = exports.getJsonWebToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const hash_1 = __importDefault(require("../config/hash"));
const { secretKey, expiresInJWT } = hash_1.default;
const getJsonWebToken = (userData) => {
    return (0, jsonwebtoken_1.sign)(userData, secretKey, { expiresIn: expiresInJWT });
};
exports.getJsonWebToken = getJsonWebToken;
const getPayloadData = (token) => {
    return (0, jsonwebtoken_1.verify)(token, secretKey);
};
exports.getPayloadData = getPayloadData;
