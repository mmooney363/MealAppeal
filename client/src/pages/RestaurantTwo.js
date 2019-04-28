import React, { Component } from "react";
import Header from "../components/Header";
import SpinResult from "../components/SpinResult";
import Footer from "../components/Footer";
import Container from "../components/Container";


class RestaurantTwo extends Component {
  constructor(props) {
    super(props);
    // console.log("RestaurantTwo page")
    // console.log(this.props.location.state.id)
  }
  render(){
    return (
      <div>
        <Header />
        <Container>
            <SpinResult state={{state: this.props.location.state }} />
        </Container>
        <Footer />
      </div>
    )};
  }
  
export default RestaurantTwo;