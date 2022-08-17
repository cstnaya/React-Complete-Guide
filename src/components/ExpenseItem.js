import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";

// Component 就只是一個 javascript function 而已。
function ExpenseItem(props) {
  // 一定要有 root element，且只能一個
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

// you should export function
export default ExpenseItem;