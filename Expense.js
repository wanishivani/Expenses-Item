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



return(
    
    
    <Card className='expense'>
      <ExpenseFillter selected={Fillteryear} onChangeFilter={FilterChangeHandler}/>
      {props.item.map((expense)=>(
       <Expensesitem
       key={expense.id}
      tittle={expense.tittle}
      amount={expense.amount}
      date={expense.date}
      />
      )
      )};
    </Card>
  );
}

export default Expense;
