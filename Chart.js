import  ChartBar from'./ChartBar';
import "./Chart.css";
import React from 'react';

const Chart=(props)=>{
const datapointvalue = props.dataPoints.map(datapoint => datapoint.value);
const totalMaximum = Math.max (...datapointvalue);


 return(
<div className="chart">
    {props.dataPoints.map((datapoint)=>(
<ChartBar
key={datapoint.label}
value={datapoint.tittle}
maxvalue={totalMaximum}
label={datapoint.label}
/>
))}
</div>
 )
    };
    export default Chart;