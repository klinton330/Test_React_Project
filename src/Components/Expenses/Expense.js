import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/Expense.css";
import ExpenseFilter from "../NewExpenses/ExpenseFilter";

function Expense(props) {
  const [filterYear, selectedYear] = useState("2020");
  const getSelectedYear = (Year) => {
    console.log("inside expense", Year);
    selectedYear(Year); //2021
    console.log("filter Year", filterYear); //2020
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onSelectYear={getSelectedYear} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
