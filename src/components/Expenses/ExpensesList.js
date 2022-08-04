import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return (
            <h2 className={"expenses-list__fallback"}>
                Found no expenses
            </h2>
        );
    }

    return (
        <ul className={"expenses-list"}>
            {props.items.map(dataElement => <ExpenseItem key={dataElement.id} title={dataElement.title} amount={dataElement.amount} date={dataElement.date} />)}
        </ul>
    );

}

export default ExpensesList;