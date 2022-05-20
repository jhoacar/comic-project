const express = require("express");
const { handleLogin } = require("../../controllers/authController");
const { postUser } = require("../../controllers/userController");

const router = express.Router();

router.post("/login", handleLogin);

router.post("/register", postUser);

module.exports = router;
