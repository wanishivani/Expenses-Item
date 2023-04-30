import Card from "../UI/Card";
import React, { useState } from 'react';
import ExpenseFillter from "./ExpenseFillter";
import ExpenseChart from "./ExpenseChart";

import './Expense.css';
import Expenselist from "./Expenselist";

const Expense = (props)=>{
  const [Fillteryear,setFilteryear]=useState('2020');
  const FilterChangeHandler= selectedYear=>{
           setFilteryear(selectedYear);
  }
  const fillterdExpense = props.item.filter((expense) => {
    console.log(expense.date.getFullYear());
    return expense.date.getFullYear().toString() === Fillteryear;
  });

  console.log(Fillteryear);
  console.log(fillterdExpense);


return(
    <div>
    
    <Card className='expense'>
      <ExpenseFillter selected={Fillteryear} onChange={FilterChangeHandler}
              />
    <ExpenseChart expense={fillterdExpense}/>
      <Expenselist item={fillterdExpense}/>
    </Card>
    </div>
  )
};

export default Expense;
