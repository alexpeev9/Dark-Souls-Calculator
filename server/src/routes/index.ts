import { Router } from 'express';

import authRoutes from './authRoutes';
import weaponRoutes from './weaponRoutes';
import categoryRoutes from './categoryRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/weapon', weaponRoutes);
router.use('/category', categoryRoutes);

export default router;
