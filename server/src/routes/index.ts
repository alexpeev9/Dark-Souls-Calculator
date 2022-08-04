import { Router } from 'express';
import path from 'path';

import authRoutes from './authRoutes';
import weaponRoutes from './weaponRoutes';
import categoryRoutes from './categoryRoutes';

import env from '../env';

const router = Router();

router.use('/api/auth', authRoutes);
router.use('/api/weapon', weaponRoutes);
router.use('/api/category', categoryRoutes);

router.use('*', (req: any, res: any) => {
  return env.isInProduction
    ? res.sendFile(
        path.join(__dirname, '../../../../', '/client/build/index.html')
      )
    : res.status(404).json('Request Not Found!');
});

export default router;
