import React from "react";
import "./style.css";
import "./spinner.js";
import Button from "react-bootstrap/Button"
import Winner from "../Winner";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function Spinner(props) {
  return (

    <div id="wrapper">
      <Winner />
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
      <Button variant="primary" size="lg" style={{ width: "100%"  }}>
        Want something more specific?
      </Button>
    </div>
  );
}

export default Spinner;
