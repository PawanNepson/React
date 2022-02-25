import React from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
    // console.log(props.item)
    console.log(props.item)

    return (

        <Card className='expenses'>

            {props.item.map((expense) => {

                return <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    price={expense.price}

                />

            })}



        </Card>

    )
}

export default Expenses;