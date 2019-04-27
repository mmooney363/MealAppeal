import React, { Component } from "react";
import Header from "../components/Header";
import Results from "../components/Results";
import Footer from "../components/Footer";
import Container from "../components/Container";


class Restaurant extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <Header />
        <Container>
            <Results state={{id: this.props.location.state.id}} />
        </Container>
        <Footer />
      </div>
    )};
  }
  
export default Restaurant;