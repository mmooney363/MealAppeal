import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

class Winner extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      hidden: "hidden"
    }
  }

  getInitialState () {
    return({hidden : "hidden"});
}

  show = function () {
    this.setState({ hidden: "" });
  }

  componentWillMount() {
    this.getRestaurants();
    var that = this;
    setTimeout(function () {
      that.show();
    }, that.props.wait);
  }


  getRestaurants = () => {
    this.setState({ loading: true })
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${this.props.result.id}/reviews`, {
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
      <div className={`${this.state.hidden} RestaurantList__gallery`}>
        <div className="spin-RestaurantInfo" key={this.props.result.id}>
          <div className="row">
            <div className="col-6 img-container">
              <img className="spin-RestaurantInfo__img" src={this.props.result.image_url} alt=""  />
            </div>
            <div className="col-6 name-container">
              <h2 className="heading-tertiary spin-RestaurantInfo__name" style={{ fontWeight: "bold", lineHeight: "1", paddingTop: "10px", marginRight: "10px" }} >{this.props.result.name}</h2>
            </div>
          </div>

          <img
            src={require(`../../images/${this.props.result.rating}.png`)}
            alt={`yelp ratings: ${this.props.result.rating}/5`}
            className="spin-RestaurantInfo__rating"/>


          <p className="spin-RestaurantInfo__reviewCount"> Based on {this.props.result.review_count} Reviews</p>

          <Link to={{
            pathname: "/spinresult",
            state: { id: this.props.result }
          }}
            style={{ width: "65%", display: "block", margin: "auto", position: "relative", bottom: "10px" }}>
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
