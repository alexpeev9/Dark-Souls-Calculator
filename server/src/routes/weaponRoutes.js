const express = require('express');
const router = express.Router();

const weaponController = require('../controllers/weaponController');
const typeController = require('../controllers/typeController');

const verifyToken = require('../middlewares/verifyTokenMiddleware');
const verifyAdmin = require('../middlewares/verifyAdminMiddleware');
// Search Weapon
// router.route('/search-by-name').post(weaponController.searchByName);
router.route('/search').post(weaponController.searchByValues);

// Add or Remove Weapon from Type
router
  .route('/add/:type')
  .put(verifyToken, verifyAdmin, typeController.addWeaponToType);
router
  .route('/remove/:type/:weapon')
  .delete(verifyToken, verifyAdmin, typeController.removeWeapon);

// CRUD Type
router.route('/list').get(typeController.getAllTypes);
router
  .route('/create')
  .post(verifyToken, verifyAdmin, typeController.createType);
router.route('/:type').get(typeController.getType);
router.route('/:type').put(verifyToken, verifyAdmin, typeController.updateType);
router
  .route('/:type')
  .delete(verifyToken, verifyAdmin, typeController.deleteType);

// GET Weapon Details
router.route('/:type/:weapon').get(weaponController.getWeaponDetails);

module.exports = router;
