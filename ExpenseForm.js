import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState(' ');
  const [enterdAmount, setEnterdAmount] = useState(' ');
  const [enterdDate, setEnterdDate] = useState(' ');

  const tittleChangeHandler = (event) => {
  
    setEnterdTitle(event.target.value);
  }
  
  const amountChangeHandler = (event) => {
  
    setEnterdAmount(event.target.value);
  }
  const DateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const ExpenseData = {
      tittle: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate)
    };
  
    props.onSaveExpenseData(ExpenseData);
    setEnterdTitle('');

    setEnterdAmount('');
    setEnterdDate('');
  };
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new__expense__controls">
        <div className="new__expense__controls">
          <label>Tittle</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={tittleChangeHandler}
          />
        </div>
        <div className="new__expense__controls">
          <label>amount</label>
          <input
            type="Number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new__expense__controls">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-11"
            max="2023-12-31"
            value={enterdDate}
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense_action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
