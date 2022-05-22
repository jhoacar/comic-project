import { NextFunction, Request, Response } from "express";
import dynamicModels from "../models";

import { getJsonWebToken } from "../helpers/handleJWT";
import { comparePassword } from "../helpers/handlePassword";

export const handleLogin = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email, password } = req.body;

        const { User } = await dynamicModels();
        const user = await User.customFindOne({ email });

        if (!user) {
            res.status(401);
            return res.json({ error: "User not registered" });
        }

        const isAuthorized = await comparePassword(password, user.password);

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
            message: "Logueado exitosamente",
            body: {
                token: token
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500);
        return res.json({ error });
    }
}