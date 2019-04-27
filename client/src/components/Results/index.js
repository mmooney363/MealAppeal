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
      reviews: [],
      errorState: null
    }
  }

  componentDidMount() {

    this.getRestaurants();
    console.log("results component")
    // console.log(this.props.state.state.id)
  }

  renderEmptyState() {
    return (
      <h2 className="heading-tertiary" style={{ textAlign: "center" }}>One moment please.</h2>
    )
  }

  getRestaurants = () => {
    this.setState({ loading: true })

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${this.props.state.state.id.id}/reviews`, {
      headers: {
        Authorization: `Bearer ${'jfKBdYwg2HcVvonXCl5dzGyumNbjmyezKnEVZ17MLE3mqWJX5UG__z0Zz9darrUiD8Eb8j6a0vg90MJuBZC58wRwOfbm_BzSXD0Q7_j4DaNzlFsHWovPzN_TihutXHYx'}`
      }
    }).then((res) => {
      // console.log(res.data.reviews)
      this.setState({ reviews: res.data.reviews })
      console.log(this.state.reviews[0].text)
    })
      .catch((err) => {
        this.setState({ errorState: "Sorry" })
      })
  }

  renderBusiness = () => {
    return (
      <Accordion className="accordion">
        <Card className="resultsCard">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <img style={{
                margin: "0",
                height: "125px",
                width: "125px",
                position: "absolute",
                top: "50%",
                left: "50%",
                msTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)"
              }}
                src={this.props.state.state.id.image_url} alt="" className="RestaurantInfo__img" />
            </Accordion.Toggle>
            <br></br>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              {this.props.state.state.id.name}
            </Accordion.Toggle>
          </Card.Header>
        </Card>
        <Card className="resultsCard">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <i className="fas fa-user-edit"></i> Reviews
              <div>{this.state.reviews[0].text}</div>
              {/* <div>{this.state.reviews[1].text}</div>
              <div>{this.state.reviews[2].text}</div> */}
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
            <Card.Body>{this.props.state.state.id.phone}</Card.Body>
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
  }

  render() {
    return (
      <section className="RestaurantList">
        {this.state.reviews.length ? this.renderBusiness() : this.renderEmptyState()}

        {/*conditional rendering for error state - when this.state.errorState is not true*/}
        {!!this.state.errorState &&
          <h1>{this.state.error}</h1>
        }
      </section>

    )
  };
}


export default Results;