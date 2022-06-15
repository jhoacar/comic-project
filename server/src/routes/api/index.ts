import { Router } from 'express';

import authorization from './auth';
import user from './user';
import { getInfo } from '../../controllers/api';

const router = Router();

router.get("/", getInfo);
router.use("/auth", authorization);
router.use("/user", user);

export default router;
