const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expenseController');

const userAuthentication = require('../middleware/auth');

const router = express.Router();

router.post('/add-expense', userAuthentication.authenticate, expenseController.postAddExpense);

router.get('/get-expenses', userAuthentication.authenticate, expenseController.getExpense);

router.delete('/delete-expense/:id', userAuthentication.authenticate, expenseController.deleteExpense);

module.exports = router;