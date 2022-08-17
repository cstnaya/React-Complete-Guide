import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          price={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
