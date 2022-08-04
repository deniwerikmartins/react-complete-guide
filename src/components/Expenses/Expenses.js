import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    //console.log(props);
    const [filteredYear, setFilteredYear] = useState('2020');


    /*for (let dataElement of props.data) {
        expenseItem.push(<ExpenseItem key={dataElement.id} title={dataElement.title} amount={dataElement.amount} date={dataElement.date}/>);
    }*/

    const filteredExpenses = props.data.filter((element) => {
        return element.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = (selectedYear) => {
        console.log('expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className={"expenses"}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;