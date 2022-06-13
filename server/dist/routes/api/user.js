"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../../controllers/user");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
const route = (0, express_1.Router)();
route.get("/avatar", user_1.getAvatars);
route.get("/profile", authMiddleware_1.authMiddleware, user_1.getProfile);
exports.default = route;
