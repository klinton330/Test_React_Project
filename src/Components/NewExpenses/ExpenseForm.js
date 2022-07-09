import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  console.log("loading the page");
  const [enterTitle, setEnteredTitle] = useState("");
  const [enterAmount, setEnteredAmount] = useState("");
  const [enterDate, setEnteredDate] = useState("");

  //Another Way
  /*const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });*/

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log("title:", enterTitle);
    //...userInput ->copies all key value pairs from old object to new object
    /*  setUserInput({
      ...userInput,
      enterTitle: event.target.value,
    });*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*  setUserInput({
      ...userInput,
      enterAmount: event.target.value,
    });*/
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
      ...userInput,
      enterDate: event.target.value,
    });*/
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enterTitle}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enterAmount}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enterDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
