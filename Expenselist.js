import  Expensesitem from'./Expensesitem';
import React from 'react';
import "./Expenselist.css";

const Expenselist=(props)=>{

    if (props.item.length===0) {
 return <h2 className='expenses-list__fallback'>No expenses found.</h2>
    }
     return (
        <ul className='expenses-list'>

        {props.item.map((expense)=>(
        <Expensesitem
        key={expense.id}
        tittle={expense.tittle}
        amount={expense.amount}
        date={expense.date}/>
     ))}
        </ul>
     
    )};
  
    export default Expenselist;