import { NextFunction, Request, Response } from "express";
import { getPayloadData } from "../helpers/handleJWT";


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const token: string = req.query.token as string;

    if (!token) {
        res.status(403);
        return res.json({ error: "Token is required" });
    }

    try {
        const userData = getPayloadData(token);

        if (!userData) {
            res.status(403);
            return res.json({ error: "Token is invalid" });
        }

        req.user = userData;

        return next();

    } catch (error) {

        console.log(error);
        res.status(400);
        return res.json({ error: "Token is incorrect" });
    }
}