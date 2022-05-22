"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    connection: process.env.DB_CONNECTION,
    MYSQL: 'mysql',
    MONGO: 'mongodb',
    mysql: {
        uri: process.env.DB_URI,
    },
    mongo: {
        uri: process.env.DB_URI,
    }
};
