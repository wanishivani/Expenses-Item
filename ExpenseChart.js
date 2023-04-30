import React from "react";
import Chart from "../chart/Chart";
const ExpenseChart = (props) => {
  const chartdatapoints = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apr", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];
  for (const expense of props.expense) {
    const expenseMonth = expense.date.getMonth();
    chartdatapoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartdatapoints}/>
};
export default ExpenseChart;
