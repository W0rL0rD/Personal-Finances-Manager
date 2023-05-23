import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
	const { transactions } = useContext(GlobalContext);

	// Get the amounts of each of the individual transactions
	const amounts = transactions.map(transaction => transaction.amount);

	// Add the amounts together using reduce function
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	return (
		<>
			<h4>Current Balance</h4>
			<h1>${total}</h1>
		</>
	);
}