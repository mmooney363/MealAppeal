import React, { Component } from "react";
import "./style_signUp.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

class SignUp extends Component {
  render() {
  return (

    <div>
      <Header />
    <form action="/action_page.php" style={{marginBottom: "60px"}}>
    <div className="container" style={{backgroundColor:"rgba(211,211,211,.7)"}}>
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
  
      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" required></input>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required></input>
  
      <label id="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
      
      
      
  
      <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn"> Sign Up </button>

      </div>
    </div>
    </form> 
    <Footer/>
    </div>
    
   
  
  
  );
}
}
export default SignUp;
