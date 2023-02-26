import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer';

const intialState = [];
    // {
    //     id:1,
    //     type:'Income',
    //     category:'Salary',
    //     amount:50000,
    //     date:'Saturday, Feb 25',

    // },
    // {
    //     id:2,
    //     type:'Expense',
    //     category:'Pets',
    //     amount:500,
    //     date:'Saturday, Feb 21',

    // },
    // {
    //     id:3,
    //     type:'Income',
    //     category:'Stocks',
    //     amount:5000,
    //     date:'Saturday, Feb 20',

    // }



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

    // console.log(transactions);
    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

