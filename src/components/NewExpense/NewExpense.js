import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const onSaveHandler = (saveIt) => {
        const data = {
            ...saveIt,
            id: Math.random().toString()
        }
        props.saveOf(data)
        console.log(data)
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSave={onSaveHandler} />
        </div>
    );
}
export default NewExpense;