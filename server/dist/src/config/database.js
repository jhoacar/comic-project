"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    connection: process.env.DB_CONNECTION,
    SQL: 'sql',
    MONGO: 'mongodb',
    sql: {
        uri: ((_a = process.env.DB_URI) === null || _a === void 0 ? void 0 : _a.includes('postgres')) ? process.env.DATABASE_URL : process.env.DB_URI,
    },
    mongo: {
        uri: process.env.DB_URI,
    }
};
