import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          price={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
