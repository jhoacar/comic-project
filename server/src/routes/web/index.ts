import { Request, Response, Router, static as ShareStatic } from "express";
import path from "path";

const router = Router();

const clientFolder = path.resolve(__dirname + '/../../../../client/build');

router.use("/", ShareStatic(clientFolder));

router.use("/*", (req: Request, res: Response) => {
    return res.sendFile(path.resolve(clientFolder + '/index.html'));
})

export default router;