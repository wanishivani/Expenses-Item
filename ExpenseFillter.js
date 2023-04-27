import React from 'react'
import  './ExpenseFillter.css'

const ExpenseFillter=(props)=>{
    const dropdownHandler=(event)=>{
        props.onChangeFillter(event.target.value)
    }
    return(
     <div className="expense_fillter">
<div className="expensefillter_controls">
<label>Fillter by year</label>
<select value={props.selected} onChangeFillter={dropdownHandler}>
<option value='2022'>2022</option>
<option value='2021'>2021</option>
<option value='2020'>2020</option>
<option value='2019'>2019</option>




</select>
</div>
</div>
);
};
export default ExpenseFillter;