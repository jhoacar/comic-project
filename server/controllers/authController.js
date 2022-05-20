const { userModel } = require("../models");
const { comparePassword } = require("../helpers/handlePassword");
const { getJsonWebToken } = require("../helpers/handleJWT");

const handleLogin = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.customFindOne( { email } );

        if (!user) {
            res.status(401);
            return res.json({ error: "User not registered" });
        }

        const isAuthorized = comparePassword(password, user.password);

        if (!isAuthorized) {
            res.status(401);
            return res.json({ error: "User not authorized" });
        }

        const payload = {
            email: user.email,
            name: user.name
        }
        const token = getJsonWebToken(payload);

        return res.json({

        });

    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });
    }
}

module.exports = {
    handleLogin
}