import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import "./random.css";

function Random() {
  return (
    <div>
      <Header />
      <Container className="spin" style={{ marginTop: 75, flex:1 }}>
        <Row className="spinWheel">
          <Spinner />
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Random;
