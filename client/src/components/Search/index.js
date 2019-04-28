import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './style.css';

const Search = () => {
  return (
    <Col className="">
        <Row className="justify-content-center">
          <Col xs lg="4">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="Price">
                Price
          </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">$</Dropdown.Item>
                <Dropdown.Item href="#/action-2">$$</Dropdown.Item>
                <Dropdown.Item href="#/action-3">$$$</Dropdown.Item>
                <Dropdown.Item href="#/action-4">$$$$</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs lg="4">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className="Rating">
                Rating
          </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">1 star</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2 stars</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3 stars</Dropdown.Item>
                <Dropdown.Item href="#/action-4">4 stars</Dropdown.Item>
                <Dropdown.Item href="#/action-5">5 stars</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>      
    </Col>
  );
}

export default Search;
