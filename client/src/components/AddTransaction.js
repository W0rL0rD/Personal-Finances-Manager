import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

	// Creating hooks
	// The state 'text' is being manipulated by function 'setText' and the default value for the state is an empty string.
	const [text, setText] = useState('');
	// The state 'amount' is being manipulated by function 'setAmount' and default value is 0.
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	// An onSubmit function created for the onSubmit in the form.
  const onSubmit = e => {
    e.preventDefault();

		// Create a new transaction to be added to the array of transactions
    const newTransaction = {
			// Generates a random number for the transaction id
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

	return (
		<>
			<h3>New transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Brief Description</label>
					{/* 'text' is the type of value in input box and the onChange event sets the value of that text to the one entered by the user*/}
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (positive - income, negative - expense)</label
          >
					{/* 'amount' is the type of value in input box and the onChange event sets the value of that amount to the one entered by the user*/}
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..."
					 />
        </div>
        <button className="btn">Add</button>
      </form>
		</>
	);
}