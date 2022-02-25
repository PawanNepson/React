import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const titleChangeHandler = (event) => { setEnteredTitle(event.target.value) }
    const amountChangeHandler = (event) => { setEnteredAmount(event.target.value) }
    const dateChangeHandler = (event) => { setEnteredDate(event.target.value) }
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const objData = { title: enteredTitle, price: enteredAmount, date: new Date(enteredDate) }

        props.onSave(objData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;