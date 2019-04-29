import React, { Component } from 'react';
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./style.css";
import { Accordion, Button } from 'react-bootstrap';


class SpinResult extends Component {

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

    console.log(this.props.state.state)
  }

  renderEmptyState() {
    return (
      <h2 className="heading-tertiary" style={{ textAlign: "center", marginTop: "30px" }}>One moment please.</h2>
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
      // console.log(this.state.reviews)
    })
      .catch((err) => {
        this.setState({ errorState: "Sorry" })
      })
  }

  renderBusiness = () => {
    return (
      <Accordion className="accordion">
        <Card className="resultsCard">
          <Card.Header className="restaurantShow">
            <Card style={{ width: '100%' }}>
              <div style={{ position: "relative", margin: "0", height: "125px", width: "100%", backgroundImage: `url(${this.props.state.state.id.image_url})`, backgroundSize: "cover" }}>
                <div class="heart"></div>
              </div>
              <Card.Body className="restaurantName" style={{ textAlign: "center" }}>
                <Card.Title style={{ fontWeight: "bold", marginBottom: "2px" }}>{this.props.state.state.id.name}</Card.Title>
                <Card.Title style={{ fontSize: "medium", marginBottom: "2px" }}>{`${this.props.state.state.id.location.display_address[0]}, ${this.props.state.state.id.location.display_address[1]}`}</Card.Title>
                <img
                  src={require(`../../images/${this.props.state.state.id.rating}.png`)}
                  alt={`yelp ratings: ${this.props.state.state.id.rating}/5`}
                  className="RestaurantInfo__rating"
                  style={{ width: "70%" }} />
              </Card.Body>
            </Card>
          </Card.Header>
        </Card>



        <Card className="resultsCard">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              <i className="fas fa-user-edit"></i> Reviews
              <Accordion.Collapse eventKey="1">


                <Card.Body className="scroll">
                  {this.state.reviews[0].text}
                  {this.state.reviews[1].text}
                  {this.state.reviews[2].text}
                </Card.Body>

              </Accordion.Collapse>
            </Accordion.Toggle>
          </Card.Header>
        </Card>
        <Card className="resultsCard">
          {/* <Card.Header> */}
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="2" style={{ padding: "12px 32px" }}>
            <i className="fas fa-phone-volume"></i>  Call
          </Accordion.Toggle>
          {/* </Card.Header> */}
          <Accordion.Collapse eventKey="2">
            <Card.Body>{this.props.state.state.id.phone}</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="resultsCard">
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
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


export default SpinResult;