import { Router } from 'express';

import weaponController from '../controllers/weaponController';

const router = Router();

router.route('/search').post(weaponController.searchByParams);

router.route('/:categoryName').get(weaponController.getByCategory);

router.route('/:categoryName/:weaponName').get(weaponController.getDetails);

export default router;
