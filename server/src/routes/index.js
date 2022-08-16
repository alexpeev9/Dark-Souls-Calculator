const express = require('express');
const router = express.Router();
router.use('/auth', require('./authRoutes'));
router.use('/weapon', require('./weaponRoutes'));
router.use('*', (req, res) => res.status(404).json('Request Not Found!'));
module.exports = router;
