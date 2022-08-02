import { Router } from 'express';

import authRoutes from './authRoutes';
import weaponRoutes from './weaponRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/weapon', weaponRoutes);
// router.use('/category, require('./categoryRoutes'));

router.use('*', (req, res) => res.status(404).json('Request Not Found!'));

export default router;
