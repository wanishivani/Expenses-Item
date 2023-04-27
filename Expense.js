import Card from "../UI/Card";
import React, { useState } from 'react';
import Expensesitem from "./Expensesitem";
import ExpenseFillter from "./ExpenseFillter";

import './Expense.css';

const Expense = (props)=>{
  const [Fillteryear,setFilteryear]=useState('2020');
  const FilterChangeHandler= selectedYear=>{
           setFilteryear(selectedYear);
  }
  const fillterdExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === Fillteryear;
  });

     let expenseContent = <p>No expenses found.</p>
         if (fillterdExpense.length > 0) {
    
        expenseContent = fillterdExpense.map((expense) => (
        <Expensesitem
          key={expense.id}
          tittle={expense.tittle}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    }
  



return(
    
    
    <Card className='expense'>
      <ExpenseFillter selected={Fillteryear} onChangeFilter={FilterChangeHandler}
              />


    
      {expenseContent}
    </Card>
  );
}

export default Expense;
