import { Router } from "express";

import { getAvatars } from "../../controllers/user";

const route = Router();

route.get("/avatar", getAvatars);

export default route;