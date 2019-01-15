import express from 'express';
var router = express.Router();

import users from './users';
import areas from './areas';

router.use(users);
router.use(areas);

export default router;
