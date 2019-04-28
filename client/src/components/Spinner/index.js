import React, { Component } from "react";
import axios from "axios";
import "./spinner.js";
import { Link } from "react-router-dom";
import Winner from "../Winner";
import "./style.css";


var z = 0;

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Spinner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      errorState: null,
      loading: false,
      FinalResults: [],
      z: 0
    };
  }


  spinPick = () => {
    const degree = localStorage.getItem("degree");
    console.log(degree)
    // .onclick(function () {
    if (degree > 0 & degree <= 60) {
      z = 0;
      console.log(this.state.results[z]);     
    } else if (degree > 60 & degree <= 120) {
      z = 1;
      console.log(this.state.results[z]);      
    } else if (degree > 120 & degree <= 180) {
      z = 2
      console.log(this.state.results[z]);      
    } else if (degree > 180 & degree <= 240) {
      z = 3
      console.log(this.state.results[z]);      
    } else if (degree > 240 & degree <= 300) {
      z = 4
      console.log(this.state.results[z]);     
    } else if (degree > 300 & degree <= 360) {
      z = 5
      console.log(this.state.results[z]);  
    } else {
      console.log(this.state.results);
    }
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
    // console.log(localStorage.getItem("degree"))
    const SpinResults = this.RandomResults(this.state.results);
    const FinalResults = SpinResults.slice(0, 6).map((result) => {
      return (
        <div className="sec" key={result.id}></div>
      )
    });

    return (
      <div id="wrapper">
        {this.state.results.length ? <Winner result={this.state.results[z]} /> : this.renderEmptyState()}
        <div id="wheel">
          <div id="inner-wheel">
            {FinalResults}
          </div>

          <div id="spin" onClick={this.spinPick}>
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
