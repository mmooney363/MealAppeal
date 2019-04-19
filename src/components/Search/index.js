import React from "react";
import { MDBCol } from "mdbreact";
import Dropdown from "react-bootstrap/Dropdown";

const Search = () => {
  return (
    <MDBCol className="col-md-8">
      <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      <div>
        <container className="row">
        <Dropdown>
          <Dropdown.Toggle md="4" variant="success" id="dropdown-basic">
            Price
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown >
          <Dropdown.Toggle md="4" variant="success" id="dropdown-basic">
            Rating
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown >
          <Dropdown.Toggle md="4" variant="success" id="dropdown-basic">
            Distance
          </Dropdown.Toggle>
         <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </container>
      </div>
    </MDBCol>
  );
}

export default Search;
