export default (state, action) => {
	// Create a switch based on type.
	switch(action.type) {
		case 'DELETE_TRANSACTION':
			return {
				...state,
				// Only keeps the transactions which are not in the acton.payload, i.e., which don't have to be deleted
				transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
			}
		
		case 'ADD_TRANSACTION':
			return {
				...state,
				// We use the ...state.transactions to get all the current transactions and we add the new transaction to the array by adding action.payload which is the new transaction
				transactions: [action.payload, ...state.transactions]
			}

		default:
			return state;
	}
} 