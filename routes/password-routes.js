const express = require('express');

const passwordController = require('../controllers/passwordController');

const router = express.Router();

router.use('/forgotpassword', passwordController.accountCreation);

router.get('/resetpassword/:id', passwordController.resetPassword);

router.get('/updatepassword/:resetpasswordId', passwordController.updatePassword);

module.exports = router;