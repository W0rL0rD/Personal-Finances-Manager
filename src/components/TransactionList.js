import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
	// Using Context API to get all the trasactions entered by the user.
	const { transactions } = useContext(GlobalContext);

	return(
		<>
			<h3>Transaction History</h3>
			<ul className='list'>
				{/* Using the map function to map a single transaction from an array of all the user input transactions to 'transaction' and using that to obtain the amount and text of the transaction in Transaction.js*/}
				{transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
			</ul>
		</>
	);
}