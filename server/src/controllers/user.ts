import { NextFunction, Request, Response } from "express";
import dynamicModels from "../models";

const { getHashedPassword } = require("../helpers/handlePassword");


export const postUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userData = req.body;

        userData.password = await getHashedPassword(userData.password);

        const { User } = await dynamicModels();

        console.log(User);
        
        const user = await User.customCreate(userData);

        delete user.password;

        return res.json({
            message: "User created succesfully",
            body: user
        });

    } catch (error) {
        console.log(error)
        //res.status(500);
        res.json({ error: error });
    }
}
