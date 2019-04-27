import React, { Component } from "react";
import Header from "../components/Header";
import Results from "../components/Results";
import Footer from "../components/Footer";
import Container from "../components/Container";


class Restaurant extends Component {
  constructor(props) {
    super(props);
    // console.log("restaurant page")
    // console.log(this.props.location.state.id)
  }
  render(){
    return (
      <div>
        <Header />
        <Container>
            <Results state={{state: this.props.location.state }} />
        </Container>
        <Footer />
      </div>
    )};
  }
  
export default Restaurant;