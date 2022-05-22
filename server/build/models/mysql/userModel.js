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
const { DataTypes } = require('sequelize');
const sequelize = require("../../config/mysql/connection");
const UserSchema = {
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.STRING,
    },
};
console.log("Using model user with mysql");
const User = sequelize.define('User', UserSchema, { tableName: 'users' });
const customFindOne = (objectToFind) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User.findOne({ where: objectToFind });
});
const customCreate = (objectToCreate) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User.create(objectToCreate);
});
const customUpdate = (dataToUpdate, objectToFind) => __awaiter(void 0, void 0, void 0, function* () {
    return yield User.update(dataToUpdate, { where: objectToFind });
});
User.customFindOne = customFindOne;
User.customCreate = customCreate;
User.customUpdate = customUpdate;
module.exports = User;
