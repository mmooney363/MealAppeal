import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./pages/Random";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Random} /> {/*temporary, will be login*/}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/random" component={Random} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
