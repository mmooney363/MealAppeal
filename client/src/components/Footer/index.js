import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
      <span>
        <h4 style={{display:"inline-block", textAlign:"center", marginTop: "15px", marginLeft:"15px"}}>2019™</h4>
        {/* <button style={{display:"inline", float:"right", width:"125px", height: "40px", padding:"0px", marginRight:"10px"}}> Login </button> */}
        <Link to="/signin"
          className={window.location.pathname === "/search" ? "nav-link active moreInfo" : "nav-link moreInfo"} variant="primary" size="lg" style={{backgroundColor:"#FBF8F8", display:"inline", float:"right", marginTop:"3px", marginRight:"5px", border:"2px solid black", padding: "7px 20" }}>
          Login
        </Link>
      </span>
      </div>
    </footer>
  );
}

export default Footer;
