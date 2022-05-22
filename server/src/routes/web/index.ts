import { Router, static as ShareStatic } from "express";
import path from "path";

const router = Router();

const clientFolder = path.resolve(__dirname + '/../../../../client/build');

router.use("/**", ShareStatic(clientFolder, {
    cacheControl: false
}));

export default router;