import React, { useState } from 'react'
import Card from '../UI/Card'
import '../Expenses/Expense.css'
import ExpenseFilter from '../NewExpenses/ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpensesChart'

function Expense(props) {
  const [filterYear, selectedYear] = useState('2020')

  const getSelectedYear = (Year) => {
    console.log('inside expense', Year)
    //props.onGetYear(Year)
    selectedYear(Year) //2021
    console.log('filter Year', filterYear) //2020
  }

  const filterYears = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === filterYear,
  )

  return (
    <div>
      <Card className="expenses">
        <ExpenseChart expenses={filterYears} />
        <ExpenseFilter selected={filterYear} onSelectYear={getSelectedYear} />
        <ExpenseList item={filterYears} />

        {/* {filterYears.length === 0 && <p>No Expenses Found</p>}
        {filterYears.length > 0 &&
          filterYears.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            )
          })} */}
        {/* Conditional type 1
        
        {filterYears.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filterYears.map((item) => {
            return (
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            )
          })
        )} */}

        {/* <ExpenseItem
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
        /> */}
      </Card>
    </div>
  )
}

export default Expense
