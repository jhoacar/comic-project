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
const types_1 = require("sequelize/types");
const connection_1 = __importDefault(require("../../config/mysql/connection"));
const UserSchema = {
    // Model attributes are defined here
    name: {
        type: types_1.DataTypes.STRING,
    },
    email: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: types_1.DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: types_1.DataTypes.STRING,
    },
};
console.log("Using model user with mysql");
const User = connection_1.default.define('User', UserSchema, { tableName: 'users' });
const customFindOne = (objectToFind) => __awaiter(void 0, void 0, void 0, function* () {
    const whereQuery = objectToFind;
    return yield User.findOne({ where: whereQuery });
});
const customCreate = (objectToCreate) => __awaiter(void 0, void 0, void 0, function* () {
    const createQuery = objectToCreate;
    return yield User.create(createQuery);
});
const customUpdate = (dataToUpdate, objectToFind) => __awaiter(void 0, void 0, void 0, function* () {
    const whereQuery = objectToFind;
    return yield User.update(dataToUpdate, { where: whereQuery });
});
User.prototype.customFindOne = customFindOne;
User.prototype.customCreate = customCreate;
User.prototype.customUpdate = customUpdate;
exports.default = User;
