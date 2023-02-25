import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer';

const intialState = [];

export const ExpenseTrackerContext = createContext(intialState);

export const Provider = ({children}) => {

    const [transactions, dispatch ] = useReducer(contextReducer, intialState);

    // action creators
    const deleteTransaction = (id) => {
        dispatch({type:'DELETE_TRANSACTION', payload:id});
    }

    const addTransaction = (transaction) => {
        dispatch({type:'ADD_TRANSACTION', payload:transaction})
    }

    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction 
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

