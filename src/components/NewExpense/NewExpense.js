import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpensesHandler = (enteredExpensesData) => {
        const expenseData = {
            ...enteredExpensesData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className={'new-expense'}>
            {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
            {isEditing && <ExpenseForm onSaveExpensesData={saveExpensesHandler} onStopEditing={stopEditingHandler}></ExpenseForm>}
        </div>
    );

}

export default NewExpense;