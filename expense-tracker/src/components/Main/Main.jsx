import React from 'react'
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import { Grid } from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';

function Main() {
    const classes = useStyles();
    return (
    <Card className = {classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
        <CardContent>
            <Typography align="center" variant="h5">Total Balance 100$</Typography>
            <Typography variant="subtitle1" style={{ lineHeight:'1.5rem', marginTop:"20px" }}></Typography>
            {/* <InfoCard /> */}
            Try Saying:Add income for 100$ in category Salary for Monday
            <Divider />
            <Form />
        </CardContent>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
    )
}

export default Main