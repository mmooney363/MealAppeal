import React from "react";
import "./style.css";
import "./spinner.js";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Spinner(props) {
  return (
  
<div id="wrapper">
            
        <div id="wheel">
            <div id="inner-wheel">
                <div className="sec"></div>
                <div className="sec"></div>
                <div className="sec"></div>
                <div className="sec"></div>
                <div className="sec"></div>
                <div className="sec"></div>
            </div>       
           
            <div id="spin">
                <div id="inner-spin"></div>
            </div>
            
            <div id="shine"></div>
        </div>
        
        <p className="text-center winner">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
        
        
  </div>
  );
}

export default Spinner;
