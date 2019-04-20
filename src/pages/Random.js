import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import "./random.css";

function Random() {
  return (
    <div>
      <Header />
      <Container className="spin">
      <Spinner />  
      </Container>
      <Footer />
    </div>
  );
}

export default Random;
