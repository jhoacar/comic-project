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
exports.comparePassword = exports.getHashedPassword = void 0;
const bcrypt_1 = require("bcrypt");
const hash_1 = __importDefault(require("../config/hash"));
const { saltRoundsBcrypt: saltRounds } = hash_1.default;
const getHashedPassword = (plainPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield (0, bcrypt_1.hash)(plainPassword, saltRounds);
    return hashedPassword;
});
exports.getHashedPassword = getHashedPassword;
const comparePassword = (plainPassword, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, bcrypt_1.compare)(plainPassword, hashedPassword);
    return result;
});
exports.comparePassword = comparePassword;
