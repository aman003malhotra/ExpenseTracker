// Context reducer is a function that takes in the old state, and an action and gives new state.
const contextReducer = (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            const deleted_transactions = state.filter((tra) => tra.id !== action.payload);
            return deleted_transactions;
        case 'ADD_TRANSACTION':
            const added_transactions = [action.payload, ...state];
            return added_transactions;
        default:
            return state;
    }
}

export default contextReducer;