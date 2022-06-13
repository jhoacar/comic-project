"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const handleJWT_1 = require("../helpers/handleJWT");
const authMiddleware = (req, res, next) => {
    const token = req.query.token;
    if (!token) {
        res.status(403);
        return res.json({ error: "Token is required" });
    }
    try {
        const userData = (0, handleJWT_1.getPayloadData)(token);
        if (!userData) {
            res.status(403);
            return res.json({ error: "Token is invalid" });
        }
        req.user = userData;
        return next();
    }
    catch (error) {
        console.log(error);
        res.status(400);
        return res.json({ error: "Token is incorrect" });
    }
};
exports.authMiddleware = authMiddleware;
