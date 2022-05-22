"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const handleJWT_1 = require("../helpers/handleJWT");
const authMiddleware = (req, res, next) => {
    const { token } = req.body;
    if (!token) {
        res.status(403);
        return res.json({ error: "Token is required" });
    }
    const userData = (0, handleJWT_1.getPayloadData)(token);
    if (!userData) {
        res.status(403);
        return res.json({ error: "Token is invalid" });
    }
    return next();
};
exports.authMiddleware = authMiddleware;
