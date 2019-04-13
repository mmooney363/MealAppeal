import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Random from "./pages/Random";
import Search from "./pages/Search";


function App() {
  return (
    <Router>
      <div>
          <Route exact path="/" component={Random} /> {/*temporary, will be login*/}
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/random" component={Random} />
          <Route exact path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
