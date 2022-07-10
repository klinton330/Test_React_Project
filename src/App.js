import Expense from './Components/Expenses/Expense'
import NewExpenses from './Components/NewExpenses/NewExpense'
import React, { useState } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Papers',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.68,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450.55,
    date: new Date(2021, 5, 12),
  },
]
const App = (props) => {
  console.log('loading app')
  const [expense, setExpense] = useState(DUMMY_EXPENSES)
  //Getting year from Expense.js And its orginated from  ExpenseFilter.js
  //const [getYear, setYear] = useState('2022')

  const addExpenseHandler = (expense) => {
    console.log('IN APP')
    console.log(expense)
    //setState always have a old data and you can get it from function argument
    setExpense((prev) => {
      console.log('prev', prev)
      return [expense, ...prev]
    })
  }
  // const yearFromChild = (year) => {
  //   setYear(year)
  // }
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      {/* <Expense
        onGetYear={yearFromChild}
        expenses={expense.filter(
          (x) => x.date.getFullYear() === parseInt(getYear),
        )}
      /> */}
      <Expense expenses={expense} />
    </div>
  )
}

export default App
