import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React from "react";
import "./ExpenseFillter";
const Expensesitem = (props) => {
  console.log("Expensesitem evaluated bt React");
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{props.tittle}</h2>
        <div className="expense-items_descreption">
          <div className="Expense-item_price">${props.amount}</div>
        </div>
      </Card>
    </li>
  )
};
export default Expensesitem;
