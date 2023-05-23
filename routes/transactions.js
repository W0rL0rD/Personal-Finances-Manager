const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

// When we make any get requests to /, we can use functions such as getTransactions
router
	.route('/')
	.get(getTransactions)
	.post(addTransaction);

// Different route as deleting a transaction also requires id.
router
	.route('/:id')
	.delete(deleteTransaction);

module.exports = router;
