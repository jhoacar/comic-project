"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../../controllers/auth");
const user_1 = require("../../controllers/user");
const router = (0, express_1.Router)();
router.post("/login", auth_1.handleLogin);
router.post("/register", user_1.postUser);
exports.default = router;
