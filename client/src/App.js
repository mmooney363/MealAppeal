import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./pages/Random";
import Search from "./pages/Search";
import Restaurant from "./pages/Restaurant";
import FilterPage from "./pages/FilterPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Random} /> {/*temporary, will be login*/}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/random" component={Random} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/results" component={Restaurant} />
          <Route exact path="/filter" component={FilterPage} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
