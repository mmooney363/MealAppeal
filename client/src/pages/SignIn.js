import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style_signIn.css";

class SignIn extends Component {
  render() {
  return (

    <div>
    <form action="/action_page.php">
    <div class="container">
    <h1>Sign In</h1>
    <p>Please enter your information to sign in.</p>
    <hr></hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required></input>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required></input>

    
    
    <div class="clearfix">
    
      <button type="submit" class="signupbtn">Sign In</button>
      <Link to="/signup"
          className={window.location.pathname === "/search" ? "nav-link active moreInfo" : "nav-link moreInfo"} variant="primary" size="lg" style={{backgroundColor:"blue", color:"white", padding:"14px 20px", margin:"8px 0", border:"none", cursor:"pointer", width:"50%", opacity:"0.9", float:"right", fontFamily:"Arial, Helvetica, sans-serif"}}>Sign-up
        </Link>

    </div>
    </div>
    </form>
    </div>
  
  );
}
}

export default SignIn;