import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

//Componant will excute only once , if you need to call componant to re-execute you need
// go for state
function ExpenseItem(props) {
  // const todayDate = new Date(2022, 6, 16);
  // const description = "Car Insurence";
  // const price = "785";

  //State -make to call the component again once it get new value

  //titles-holds a old value
  //newTitle-holds a new Value

  const [titles, newTitle] = useState(props.title);

  const [price, newPrice] = useState(props.amount);
  const clickMe = () => {
    newTitle("Updated!");
    newPrice("1.00");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titles}</h2>
        <div className="expense-item__price ">${price}</div>
      </div>
      <button onClick={clickMe}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
