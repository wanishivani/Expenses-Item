import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import React,{useState} from 'react';

function Expensesitem(props) {
  const [tittle,setTittle]=useState(props.tittle,props.amount);
  const [amount]=useState(props.amount);

 console.log('Expensesitem evaluated bt React');
  const clickHandler = () =>{

   setTittle('Updated!!');
    console.log(tittle);
    setTittle('Added!!');
    console.log(amount);


  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>{props.date.toLocaleString()}</div>
      <h2>{tittle}</h2>

      <div className="expense-items_descreption">
        <div className="Expense-item_price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change tittle</button>
      <button onClick={clickHandler}>Add</button>
    </Card>
  );
}
export default Expensesitem;
