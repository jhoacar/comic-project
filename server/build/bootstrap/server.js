"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const api_1 = __importDefault(require("../routes/api"));
const web_1 = __importDefault(require("../routes/web"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", api_1.default);
app.use("/", web_1.default);
exports.default = app;
