import { Router } from "express";
import { handleLogin } from '../../controllers/auth';
import { postUser } from '../../controllers/user';

const router = Router();

router.post("/login", handleLogin);
router.post("/register", postUser);

export default router;
