import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Dereferencing transaction to write less code
export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	// Determines if a transaction is an expense or income.
	const sign = transaction.amount < 0 ? '-' : '+';
	return (
		/* Changing the class name to change the colour of the border according to nature of transaction*/
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			{/* transaction.text gets the text and transactions.amount gets the amount as transaction is called in TransactionList.js where a transaction is one from an array of transactions entered by the user.*/}
					{ transaction.text } <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className='delete-btn'>x</button>
		</li>
	);
}