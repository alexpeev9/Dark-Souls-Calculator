const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const verifyAdmin = require('../middlewares/verifyAdminMiddleware');

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/logout').get(authController.logout);

// TODO: only for admin
router.route('/list').get(verifyAdmin, authController.getAllUsers);
router.route('/delete/:id').delete(authController.deleteUser);
module.exports = router;
