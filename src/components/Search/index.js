import React from "react";
import { MDBCol } from "mdbreact";
import Dropdown from "react-bootstrap/Dropdown";

const Search = () => {
  return (
    <MDBCol className="col-md-8">
      <div>
        <container className="row">
        <Dropdown>
          <Dropdown.Toggle md="4" variant="success" id="dropdown-basic" className = "Price">
            Price
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">$</Dropdown.Item>
            <Dropdown.Item href="#/action-2">$$</Dropdown.Item>
            <Dropdown.Item href="#/action-3">$$$</Dropdown.Item>
            <Dropdown.Item href="#/action-4">$$$$</Dropdown.Item>

          </Dropdown.Menu>
        </Dropdown>
        <Dropdown >
          <Dropdown.Toggle md="4" variant="success" id="dropdown-basic" className="Rating">
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
        
        </container>
      </div>
    </MDBCol>
  );
}

export default Search;
