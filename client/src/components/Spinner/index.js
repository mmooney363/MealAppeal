import React, { Component } from "react";
import axios from "axios";
import "./spinner.js";
import { Link } from "react-router-dom";
import Winner from "../Winner";
import "./style.css";

// document.getElementById("spin").onclick(function(){
//   switch (localStorage.getItem("degree")) {
//     case (localStorage.getItem("degree") > 0 & localStorage.getItem("degree")<= 60):
//     console.log(this.state.result[0]);
//     break;
//     case (localStorage.getItem("degree") > 60 & localStorage.getItem("degree") <= 120):
//     console.log(this.state.result[0]);
//     break;


//     default: console.log("spin");
//   }
// })



// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Spinner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      errorState: null,
      loading: false,
      FinalResults: [],
    };
    console.log(this)
  }

  
  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    this.setState({ loading: true })

    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    const success = (pos) => {
      var crd = pos.coords;

      axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${crd.latitude}&longitude=${crd.longitude}`, {
        headers: {
          Authorization: `Bearer ${'jfKBdYwg2HcVvonXCl5dzGyumNbjmyezKnEVZ17MLE3mqWJX5UG__z0Zz9darrUiD8Eb8j6a0vg90MJuBZC58wRwOfbm_BzSXD0Q7_j4DaNzlFsHWovPzN_TihutXHYx'}`
        },
        params: {
          limit: 20,
          category: {
            parent_aliases: "restaurants"
          }
        }
      }).then((res) => {
        console.log(res.data.businesses)
        this.setState({ results: res.data.businesses, loading: false })
      })
        .catch((err) => {
          console.log(err)
        })

    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  renderEmptyState() {
    return (
      <h2 className="heading-tertiary" style={{ textAlign: "center" }}>Press the Spin button to select a random restaurant!</h2>
    )
  }

  RandomResults = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  renderSpinner() {
    localStorage.getItem("degree");
    console.log(localStorage.getItem("degree"))
    const SpinResults = this.RandomResults(this.state.results);
    const FinalResults = SpinResults.slice(0, 6).map((result) => {
        return (
        <div className="sec" key={result.id}></div>
      )
    });
    
    return (
      <div id="wrapper">
      {this.state.results.length ? <Winner result={this.state.results}/> : this.renderEmptyState()}
        <div id="wheel">
          <div id="inner-wheel">
            {FinalResults}
          </div>

          <div id="spin">
            <div id="inner-spin"></div>
          </div>

          <div id="shine"></div>
          <div id="txt"></div>
        </div>
        <Link to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} variant="primary" size="lg" style={{ width: "100%" }}>
          Want something more specific?
      </Link>
      </div>
    )

  }

  render() {
    return (
      <section className="RestaurantList">
        {this.renderSpinner()}
      </section>

    )
  };
}

export default Spinner;
