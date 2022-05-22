import { NextFunction, Request, Response } from "express";
import { getPayloadData } from "../helpers/handleJWT";

declare namespace Express {
    export interface Request {
       user?: Object
    }
} 

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const { token } = req.body;

    if (!token) {
        res.status(403);
        return res.json({ error: "Token is required" });
    }

    const userData = getPayloadData(token);

    if (!userData) {
        res.status(403);
        return res.json({ error: "Token is invalid" });
    }

    return next();

}