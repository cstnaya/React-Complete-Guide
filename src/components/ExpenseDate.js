function ExpenseDate(props) {
  return (
    <div>
      <div>{props.date.toLocaleString('en-us', { month: 'long' })   }</div>
      <div>{props.date.getFullYear()}</div>
      <div>{props.date.toLocaleString('en-us', { day: '2-digit' })}</div>
    </div>
  );
}

export default ExpenseDate;
