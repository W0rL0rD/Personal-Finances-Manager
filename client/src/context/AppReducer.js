import { application } from "express";

export default (state, action) => {
	// Create a switch based on type.
	switch(action.type) {
		case 'GET_TRANSACTIONS':
			return {
				...state,
				loading: false,
				transactions: action.payload
			}

		case 'DELETE_TRANSACTION':
			return {
				...state,
				// Only keeps the transactions which are not in the acton.payload, i.e., which don't have to be deleted
				transactions: state.transactions.filter(transaction => transaction. _id !== action.payload)
			}
		
		case 'ADD_TRANSACTION':
			return {
				...state,
				// We use the ...state.transactions to get all the current transactions and we add the new transaction to the array by adding action.payload which is the new transaction
				transactions: [...state.transactions, action.payload]
			}

			case 'TRANSACTION_ERROR':
			return {
				...state,
				error: action.payload
			}

		default:
			return state;
	}
} 