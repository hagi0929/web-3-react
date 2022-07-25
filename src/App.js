import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  let expenses = useState([
    {
      title: "car insurance",
      amount: "69",
      date: new Date(2021, 2, 28),
    },
    {
      title: "food",
      amount: "300",
      date: new Date(2021, 3, 29),
    },
  ])
  let [itemDisplay, setItemDisplay] = useState(
    expenses.map((num) => (
      <ExpenseItem date={num.date} title={num.title} amount={num.amount} />
    ))
  );
  function updateItemDisplay() {
    setItemDisplay(
      expenses.map((num) => (
        <ExpenseItem date={num.date} title={num.title} amount={num.amount} />
      ))
    );
  }
  function saveExpenseDataHandler(enteredExpenseData) {
    expenses = enteredExpenseData
    console.log(expenses);
    updateItemDisplay();
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense dataMade={saveExpenseDataHandler} />
      <div className="expenses">{itemDisplay}</div>
    </div>
  );
}

export default App;
