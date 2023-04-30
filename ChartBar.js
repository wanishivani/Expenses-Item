import "./Chartbar.css";
import React from "react";
const ChartBar=(props) =>{
  let barFillHeight = '10%';
  
  if (props.maxvalue > 0) {
    barFillHeight = Math.round((props.maxvalue / props.value) *100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar_inner"></div>
      <div className="chart-bar__fill" style= {{ height: barFillHeight }}></div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  )
};
export default ChartBar;
