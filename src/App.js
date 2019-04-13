import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./pages/Random";
import Header from "./components/Header";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Random} /> {/*temporary, will be login*/}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/random" component={Random} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
