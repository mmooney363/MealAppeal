import React, { Component } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Results from "../components/Results";
import Footer from "../components/Footer";
import Container from "../components/Container";


function Restaurant() {
    return (
      <div>
          <Header />
          <Container>
            <Results />
        </Container>
        <Footer />
      </div>
    );
  }
  
export default Restaurant;