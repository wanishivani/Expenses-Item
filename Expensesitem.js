import "./ExpenseItem.css";
function Expenseitem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>

      <div className="expense-items_descreption">
               <h2>{props.tittle}</h2>
        <div className="Expense-item_price">${props.amount}</div>

    </div>
    </div>
  );
}
export default Expenseitem;
