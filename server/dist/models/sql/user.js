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
const sequelize_1 = __importDefault(require("sequelize"));
const connection_1 = __importDefault(require("../../config/sql/connection"));
console.log("Using model user with sql");
class User {
    constructor(ObjectToCreate) {
        User.customCreate(ObjectToCreate);
    }
    static customFindOne(objectToFind) {
        return __awaiter(this, void 0, void 0, function* () {
            const whereQuery = objectToFind;
            return yield User.Model.findOne({ where: whereQuery });
        });
    }
    ;
    static customFindAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User.Model.findAll();
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
            const createQuery = objectToCreate;
            return yield User.Model.create(createQuery);
        });
    }
    ;
    static customUpdate(dataToUpdate, objectToFind) {
        return __awaiter(this, void 0, void 0, function* () {
            const whereQuery = objectToFind;
            return yield User.Model.update(dataToUpdate, { where: whereQuery });
        });
    }
    ;
}
exports.default = User;
User.schema = {
    // Model attributes are defined here
    name: {
        type: sequelize_1.default.STRING,
    },
    email: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    avatar: {
        type: sequelize_1.default.STRING,
        unique: true
    },
    image: {
        type: sequelize_1.default.STRING,
    }
};
User.Model = connection_1.default.define('User', User.schema, { tableName: 'users' });
;
