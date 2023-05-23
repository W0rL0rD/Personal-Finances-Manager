const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

// Fetch the transactions router
const transactions = require('./routes/transactions');

const app = express();

// Included so we can use the body parser.
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));

}

// Mount the transactions router
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));