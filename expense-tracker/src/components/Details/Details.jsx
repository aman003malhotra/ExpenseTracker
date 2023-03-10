import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import {Chart, ArcElement} from 'chart.js';
import useTransactions from '../../useTransactions';

Chart.register(ArcElement);

function Details({ title }) {
    const classes = useStyles();
    const {total, chartData} = useTransactions(title);
  return (
    <Card className={title === 'Income' ? classes.income:classes.expense}>
        <CardHeader title={title} />
        <CardContent>
            <Typography varient="h5">${total}</Typography>
            <Doughnut data = {chartData} />
        </CardContent>

    </Card>
  )
}

export default Details