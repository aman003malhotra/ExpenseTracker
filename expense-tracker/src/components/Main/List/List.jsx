import React, {useContext} from 'react';
import { ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, List as MUIList } from '@material-ui/core'; 
import {Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';

import { ExpenseTrackerContext } from '../../../Context/context';


function List() {
    const classes = useStyles();
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
            <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={transaction.type === 'Income'?classes.avatarIncome:classes.avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='delete' onClick={()=>{deleteTransaction(transaction.id)}}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
        ))}
    </MUIList>
  )
}

export default List