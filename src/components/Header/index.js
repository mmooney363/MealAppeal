import React from "react";
import "./style.css";
//import "./pages/style_signUp.css";
import {Link} from "react-router-dom";


function Header(props) {
  return (
    <div class="page-header text-center">
      <h1>MealAppeal</h1> <Link to="pages/SignUp">Sign Up </Link>
    </div>
  );
}

export default Header;
