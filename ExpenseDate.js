import './ExpenseDate.css';
import "./ExpenseItem.css";
import React from 'react';

function ExpenseDate(props) {
    const Month=props.date.toLocaleString('en-IN',{month:'long'});
    const Day=props.date.toLocaleString('en-IN',{day:'2-digit'});
        const year=props.date.getFullYear();

 return(
<div className="expense-date">
        <div className='expense-date__Month'>{Month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__Day">{Day}</div>
              </div>

 );

    }
    export default ExpenseDate;