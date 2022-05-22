import { NextFunction, Request, Response } from "express";
import dynamicModels from "../models";
import { getHashedPassword } from "../helpers/handlePassword";
import { UserSchema } from "../models";

export const postUser = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const userData = req.body;

        userData.password = await getHashedPassword(userData.password);

        const { User } = await dynamicModels();

        const user = await User.customCreate(userData);

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

export const getAvatars = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const { User } = await dynamicModels();

        const allUser: UserSchema[] = await User.customFindAll({});
        const avatars: string[] = allUser.map((user: UserSchema) => user.avatar);

        return res.json({
            message: "All avatars in the system",
            body: avatars
        });

    } catch (error) {
        console.log(error)
        res.status(500);
        res.json({ error: error });
    }
}

