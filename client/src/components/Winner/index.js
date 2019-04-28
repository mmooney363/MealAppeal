import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

class Winner extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      results: []
    }
  }

  componentDidMount(){
    this.getRestaurants();
  }


  getRestaurants = () => {
    this.setState({ loading: true })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${this.props.result[0].id}/reviews`, {
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

  renderWinner() {
    return (
      <div className="RestaurantList__gallery">
        <div className="RestaurantInfo" style={{ marginTop: "10px", marginBottom: "10px" }} key={this.props.result[0].id}>
          <div className="row">
            <div className="col-6" style={{ height: "150px", width: "125px", margin: "auto" }}>
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
                src={this.props.result[0].image_url} alt="" className="RestaurantInfo__img" />
          </div>
          <div className="col-6" style={{ height: "150px", width: "125px", margin: "auto" }}>
            <h2 className="heading-tertiary RestaurantInfo__name" style={{ lineHeight: "1", paddingTop: "10px" }} >{this.props.result[0].name}</h2>
          </div>
        </div>

        <img
          src={require(`../../images/${this.props.result[0].rating}.png`)}
          alt={`yelp ratings: ${this.props.result[0].rating}/5`}
          className="RestaurantInfo__rating"
          style={{ width: "initial" }} />


        <p className="RestaurantInfo__reviewCount"> Based on {this.props.result[0].review_count} Reviews</p>

        <Link to={{
          pathname: "/spinresult",
          state: { id: this.props.result[0] }
        }}>
          More Info
        </Link>

      </div>
      </div>
    );
  }

  renderEmptyState() {
    return (
      <h2 className="heading-tertiary" style={{ textAlign: "center" }}>Press the Spin button to select a random restaurant!</h2>
    )
  }


  render() {
    return (
      <section className="RestaurantList">
        {this.renderWinner()}
      </section>

    )
  };
}

export default Winner;
