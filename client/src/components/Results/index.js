import React from 'react';
import Card from "react-bootstrap/Card";
import { key } from "../RestaurantList";
import "./style.css";
import { Accordion, Button } from 'react-bootstrap';



function Results() {
 return (

<Accordion className="accordion">
 <Card className="resultsCard">
   <Card.Header>
     <Accordion.Toggle as={Button} variant="link" eventKey="1">
     <i class="fas fa-user-edit"></i> Reviews
     </Accordion.Toggle>
   </Card.Header>
 </Card>
 <Card className="resultsCard">
   {/* <Card.Header> */}
     <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
     <i className="fas fa-phone-volume"></i>  Call
     </Accordion.Toggle>
   {/* </Card.Header> */}
   <Accordion.Collapse eventKey="0">
     <Card.Body>867-5309</Card.Body>
   </Accordion.Collapse>
 </Card>
 <Card className="resultsCard" >
 {/* I believe adding a class to Card.Header below will allow to style the links */}
   <Card.Header>
     <Accordion.Toggle as={Button} variant="link" eventKey="1">
     <i className="fas fa-map-signs"></i>  Directions
     </Accordion.Toggle>
   </Card.Header>
 </Card>
 <Card className="resultsCard">
   <Card.Header>
     <Accordion.Toggle as={Button} variant="link" eventKey="1">
     <i className="fas fa-laptop"></i>   Website
     </Accordion.Toggle>
   </Card.Header>
 </Card>
</Accordion>

 );
}

export default Results;