const Transaction = require('../models/Transaction');

// @desc   Get all the transactions
// @route  GET /api/v1/transactions
// @access Public 
exports.getTransactions = async (req, res, next) => {
	try {
		const transactions = await Transaction.find();

		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			error: 'Server Error'
		});
	}
}

// @desc   Add a transaction
// @route  POST /api/v1/transactions
// @access Public 
exports.addTransaction = async (req, res, next) => {
	try {
		// Getting data that has to be sent in a transaction
		const { text, amount } =  req.body;

		// Creating a nwe transaction
		const transaction = await Transaction.create(req.body);

		return res.status(201).json({
			success: true,
			data: transaction
		});
	} catch (err) {
		if(err.name === 'ValidationError') {
			// Get an array of messages from the errors encountered
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
		}
	}
}

// @desc   Delete a transaction
// @route  DELETE /api/v1/transactions/:id
// @access Public 
exports.deleteTransaction = async (req, res, next) => {
	try {
		// Find the transaction corresponding to the id provided in the route
    const transaction = await Transaction.findById(req.params.id);

		// If transaction is not found in the database
    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

		// Removes the transaction found
    await transaction.deleteOne();

		// Sends a confirmation of success of the removal
    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}