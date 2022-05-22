import {Router} from 'express';

import authorization from './auth';

const router = Router();

router.use("/auth",authorization);

export default router;
