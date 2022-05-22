import {Router} from 'express';

import authorization from './auth';
import user from './user';

const router = Router();

router.use("/auth",authorization);
router.use("/user",user);

export default router;
