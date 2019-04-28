import React, {Component} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './style.css';

class Search extends Component {
  constructor(props){
    super(props)
      this.select = this.select.bind(this);

    this.state = {
      value: null
    };
  }

  select(event) {
    this.setState({
      value: event.target.value
    })
    console.log(this.state.value);
  }

  render() {
  return(
    <Col className = "" >
      <Row className="justify-content-center">
        <Col xs lg="4">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="Price">
              Price
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.select} className='price1' value='1' href="#/action-1">$</Dropdown.Item>
              <Dropdown.Item onClick={this.select} value='2' href="#/action-2">$$</Dropdown.Item>
              <Dropdown.Item onClick={this.select} value='3' href="#/action-3">$$$</Dropdown.Item>
              <Dropdown.Item onClick={this.select} value='4' href="#/action-4">$$$$</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>

        <Col xs lg="4">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="Rating">
              Rating
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={this.select} value='1' href="#/action-1">1 star</Dropdown.Item>
              <Dropdown.Item onClick={this.select} value='2' href="#/action-2">2 stars</Dropdown.Item>
              <Dropdown.Item onClick={this.select} value='3' href="#/action-3">3 stars</Dropdown.Item>
              <Dropdown.Item onClick={this.select} value='4' href="#/action-4">4 stars</Dropdown.Item>
              <Dropdown.Item onClick={this.select} value='5' href="#/action-5">5 stars</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>      
    </Col>
  );
}
}


export default Search;
