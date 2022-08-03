import { Router } from 'express';

import authController from '../controllers/authController';
import verifyAdminMiddleware from '../middlewares/verifyAdminMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';

const router = Router();

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);

// Only for admin
router
  .route('/list')
  .get(
    verifyTokenMiddleware,
    verifyAdminMiddleware,
    authController.getAllUsers
  );

router
  .route('/delete/:id')
  .delete(
    verifyTokenMiddleware,
    verifyAdminMiddleware,
    authController.deleteUser
  );

export default router;
