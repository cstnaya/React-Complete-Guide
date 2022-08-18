import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    clearUserInput();
  };

  const clearUserInput = () => {
    setUserInput({ enteredTitle: "", enteredAmount: "", enteredDate: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
          />
        </div>
        <div>
          <label>amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
          />
        </div>
        <div>
          <label>date</label>
          <input
            type="date"
            min="2022-01-01"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
