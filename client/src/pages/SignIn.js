import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style_signIn.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class SignIn extends Component {
  render() {
  return (

    <div>
    <Header/>
    <form action="/action_page.php">
    <div className="container" style={{backgroundColor:"rgba(211, 211, 211, .7)"}}>
    <h1>Sign In</h1>
    <p>Please enter your information to sign in.</p>
    

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required></input>

    
    
    <div className="clearfix">
    
      <button type="submit" className="signupbtn">Sign In</button>
      <Link to="/signup"
          className={window.location.pathname === "/search" ? "nav-link active moreInfo" : "nav-link moreInfo"} variant="primary" size="lg" style={{backgroundColor:"#3DA5D9", color:"white", padding:"14px 20px", margin:"8px 0", border:"none", cursor:"pointer", width:"50%", opacity:"0.9", float:"right", fontFamily:"Arial, Helvetica, sans-serif"}}>Sign-up
        </Link>

    </div>
    </div>
    </form>
    <Footer/>
    </div>
  
  );
}
}

export default SignIn;