import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { key } from "../RestaurantList";
import "./style.css";

function Results() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Resaurants</Card.Title>
        <Card.Text>
          picture
   </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="font">Reviews</ListGroupItem>
        <ListGroupItem className="font"><i className="fas fa-phone-volume"></i>  Call</ListGroupItem>
        <ListGroupItem className="font"><i className="fas fa-map-signs"></i>  Directions</ListGroupItem>
        <ListGroupItem className="font"><i className="fas fa-laptop"></i>   Website</ListGroupItem>
        <ListGroupItem className="font"><i className="fas fa-utensils"></i> Take out</ListGroupItem>
        <ListGroupItem className="Review comments">Review Comments</ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default Results;