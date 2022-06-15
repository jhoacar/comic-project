import { NextFunction, Request, Response } from "express";

export const getInfo = async (req: Request, res: Response, next: NextFunction) => {

    const serverIP = req.socket.remoteAddress;
    const clientIP = req.socket.localAddress;

    return res.json({
        serverIP,
        clientIP,
    });
}

