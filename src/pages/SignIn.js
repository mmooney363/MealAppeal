import React from "react";
import "./style_signIn.css";

function SignUp(props) {
  return (

    <div>
    <form action="/action_page.php" style="border:1px solid #ccc">
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
    </div>
    </div>
    </form>
    </div>
  
  );
}

export default SignUp;