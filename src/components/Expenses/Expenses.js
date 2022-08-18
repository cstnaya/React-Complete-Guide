import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
