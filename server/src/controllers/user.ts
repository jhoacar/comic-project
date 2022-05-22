import { NextFunction, Request, Response } from "express";
import { User } from "../models";

const { getHashedPassword } = require("../helpers/handlePassword");


export const postUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userData = req.body;

        userData.password = await getHashedPassword(userData.password);

        const Model = await User;
        const user = await Model.customCreate(userData);

        delete user.password;

        return res.json({
            message: "User created succesfully",
            body: user
        });

    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({ error: error });
    }
}
