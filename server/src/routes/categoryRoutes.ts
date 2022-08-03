import { Router } from 'express';

import categoryController from '../controllers/categoryController';
import verifyAdminMiddleware from '../middlewares/verifyAdminMiddleware';
import verifyTokenMiddleware from '../middlewares/verifyTokenMiddleware';

const router = Router();

router.route('/list').get(categoryController.getAll);

router
  .route('/create')
  .post(
    verifyTokenMiddleware,
    verifyAdminMiddleware,
    categoryController.create
  );

router
  .route('/update/:customId')
  .put(verifyTokenMiddleware, verifyAdminMiddleware, categoryController.update);

router
  .route('/remove/:customId')
  .delete(
    verifyTokenMiddleware,
    verifyAdminMiddleware,
    categoryController.remove
  );

export default router;
