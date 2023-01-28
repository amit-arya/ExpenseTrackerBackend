const express = require('express');

const premiumController = require('../controllers/premiumController');

const userAuthentication = require('../middleware/auth');

const router = express.Router();

router.get('/showLeaderBoard', userAuthentication.authenticate, premiumController.getLeaderBoard);

router.get('/user/download', userAuthentication.authenticate, premiumController.downloadExpense);

router.get('/user/reports', userAuthentication.authenticate, premiumController.expenseReports);

module.exports = router;