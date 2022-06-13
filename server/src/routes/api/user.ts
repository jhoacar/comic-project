import { Router } from "express";

import { getAvatars, getProfile } from "../../controllers/user";
import { authMiddleware } from "../../middlewares/authMiddleware";

const route = Router();

route.get("/avatar", getAvatars);
route.get("/profile", authMiddleware, getProfile);

export default route;