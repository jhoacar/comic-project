"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("../routes/api"));
const web_1 = __importDefault(require("../routes/web"));
const packageJSON = require("../../package.json");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.get("/health", (req, res) => {
    return res.status(200).json({
        message: "OK"
    });
});
app.get("/version", (req, res) => {
    return res.status(200).json({
        message: packageJSON.version
    });
});
app.use("/api/v1", api_1.default);
app.use("/", web_1.default);
exports.default = app;
