import React from "react";
import "./style.css";
import "./spinner.js";
import { Link } from "react-router-dom";
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
      <Link to="/filter"
              className={window.location.pathname === "/filter" ? "nav-link active" : "nav-link"} variant="primary" size="lg" style={{ width: "100%"  }}>
        Want something more specific?
      </Link>
    </div>
  );
}

export default Spinner;
