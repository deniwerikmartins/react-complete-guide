import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

const Expenses = (props) => {
    //console.log(props);
    const [filteredYear, setFilteredYear] = useState('2020');

    let expenseItem = [];
    /*for (let dataElement of props.data) {
        expenseItem.push(<ExpenseItem key={dataElement.id} title={dataElement.title} amount={dataElement.amount} date={dataElement.date}/>);
    }*/
    expenseItem = props.data.map(dataElement => <ExpenseItem key={dataElement.id} title={dataElement.title} amount={dataElement.amount} date={dataElement.date} />);
    console.log(expenseItem);
    const [itens, setItens] = useState(expenseItem);

    const filterChangeHandler = (selectedYear) => {
        console.log('expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
        console.log(expenseItem);

        let newItens = expenseItem.filter((element) => {
            console.log(element.props.date.getFullYear());
            console.log(parseInt(selectedYear));
            return element.props.date.getFullYear() === parseInt(selectedYear);
        });

        console.log(newItens);
        setItens(newItens);
    }


    return (
        <div>
            <Card className={"expenses"}>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {itens}
                {/*{props.data.map(dataElement => <ExpenseItem key={dataElement.id} title={dataElement.title} amount={dataElement.amount} date={dataElement.date} />)}*/}
            </Card>
        </div>
    );
}

export default Expenses;