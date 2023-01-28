const path = require('path');

const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/user/signup', userController.signupUser);

router.post('/login-user', userController.loginUser);

module.exports = router;

