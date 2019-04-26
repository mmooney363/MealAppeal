import React, { Component } from 'react';
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./style.css";
import { Accordion, Button } from 'react-bootstrap';


class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      errorState: null
    }
  }

  componentDidMount() {
    
    this.getRestaurants();
   console.log(this.props.state.id)
  }

  getRestaurants = () => {
    this.setState({ loading: true })

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/matches?yelp_business_id=${this.props.state.id}`, {
        headers: {
            Authorization: `Bearer ${'jfKBdYwg2HcVvonXCl5dzGyumNbjmyezKnEVZ17MLE3mqWJX5UG__z0Zz9darrUiD8Eb8j6a0vg90MJuBZC58wRwOfbm_BzSXD0Q7_j4DaNzlFsHWovPzN_TihutXHYx'}`
        },
        params: {
            limit: 1
        }
    }).then((res) => {
            console.log(res.data.businesses)
            this.setState({ results: res.data.businesses })
        })
        .catch((err) => {
            this.setState({ errorState: "Sorry" })
        })
}

  render() {
    return (
      <Accordion className="accordion">
        <Card className="resultsCard">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Reviews picture
     </Accordion.Toggle>
          </Card.Header>
        </Card>
        <Card className="resultsCard">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <i className="fas fa-user-edit"></i> Reviews
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

    )
  };
}


export default Results;