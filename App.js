
import Expenseitem from './components/Expensesitem';
function App() {
  const expense=[
    {
  id:'el',
  titlle:'Toilet Paper',
  amount:94.12,
  date:new Date(2023,4,20)
  },
{id:'e2',tittle:"New TV",amount:799.49, date: new Date(2023,4,20)},
  {
    id:'e3',
    tittle:'Car',
    amount:294.67,
    date:new Date (2023,4,20)
  
},
{id: 'e4',
titlle:' New desk',
amount:450,
date: new Date(2023,4,20)


},
];
  return (
    <div>
      <h1>Expense</h1>
          
          <Expenseitem titlle={expense[0].titlle}
          amount={expense[0].amount}
          date={expense[0].date}
          ></Expenseitem>
          <Expenseitem titlle={expense[1].titlle}
          amount={expense[1].amount}
          date={expense[1].date}
          ></Expenseitem>
          <Expenseitem titlle={expense[2].titlle}
          amount={expense[2].amount}
          date={expense[2].date}
          ></Expenseitem>
          <Expenseitem titlle={expense[3].titlle}
          amount={expense[3].amount}
          date={expense[3].date}
          ></Expenseitem>

        
    </div>
  );
}

export default App;