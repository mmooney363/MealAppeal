import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Spinner from "../components/Spinner";
import "./random.css";

function Random() {
  return (
    <div>
      <Container className="spin" style={{ marginTop: 30 }}>
        <Row className="spinWheel">
          <Spinner />
        </Row>
      </Container>
    </div>
  );
}

export default Random;
