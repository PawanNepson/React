import Expenses from "./components/Expenses/Expenses"
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense"

function App() {

    let dummy = [{
        id: 1,
        title: "Car",
        date: new Date(2022, 7, 11),
        price: 1000
    }, {
        id: 2,
        title: "Recharge",
        date: new Date(2012, 9, 16),
        price: 100
    }, {
        id: 3,
        title: "House rent",
        date: new Date(2021, 5, 29),
        price: 10000
    }]
    const onSave = (ex) => {
        const changeobintoarray = [ex, ...expenses]
        setExpenses(changeobintoarray)
    }
    const [expenses, setExpenses] = useState(dummy)
    return (
        <div>
            <NewExpense saveOf={onSave} />
            <Expenses let item={expenses} />



        </div>
    )
}

export default App;