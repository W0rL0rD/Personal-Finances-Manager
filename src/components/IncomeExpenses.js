import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext);

	// Get the amount of each transaction
	const amounts = transactions.map(transaction => transaction.amount);

	// Get all the amounts which are positive and then add them using reduce.
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	// Get all the amounts which are negative and then add them all using reduce.
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

	return (
		<div className='inc-exp-container'>
			<div>
				<h4>Income</h4>
				<p className="money plus">{income}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">{expense}</p>
			</div>
		</div>
	);
}