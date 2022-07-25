import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    props.dataMade(enteredExpenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm dataMade={saveExpenseDataHandler}/>
    </div>
  );
}
export default NewExpense;
