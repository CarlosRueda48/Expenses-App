import './Expenses.css';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from '../Chart/ExpensesChart';
import { useState } from 'react';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');


    const filterExpensesHandler = (year) => {
        console.log('Filtering expenses to year', year);
        setFilteredYear(year);
    }

    const filteredExpenses = props.expensesList.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onFilterExpenses={filterExpensesHandler} selected={filteredYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList expensesList={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses;