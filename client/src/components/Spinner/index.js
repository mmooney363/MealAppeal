import React, { Component } from "react";
import axios from "axios";
import "./spinner.js";
import { Link } from "react-router-dom";
import Winner from "../Winner";
import "./style.css";




// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Spinner extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: [],
      errorState: null,
      loading: false,
      FinalResults: [],
      clicked: false,
      z: 0
    };
  }


  spinPick = () => {
    const degree = localStorage.getItem("degree");
    this.setState({clicked: true});
    console.log(degree)
    // .onclick(function () {
    if (degree > 0 & degree <= 30 || degree > 330 & degree <= 360) {
      this.setState({z: 0});
      // console.log(this.state.results[this.state.z]);     
    } else if (degree > 30 & degree <= 90) {
      this.setState({z: 1});
      // console.log(this.state.results[this.state.z]);      
    } else if (degree > 90 & degree <= 150) {
      this.setState({z: 2});
      // console.log(this.state.results[this.state.z]);      
    } else if (degree > 150 & degree <= 210) {
      this.setState({z: 3});
      // console.log(this.state.results[this.state.z]);      
    } else if (degree > 210 & degree <= 270) {
      this.setState({z: 4});
      // console.log(this.state.results[this.state.z]);     
    } else if (degree > 270 & degree <= 330) {
      this.setState({z: 5});
      // console.log(this.state.results[this.state.z]);  
    } else {
      console.log("nothing");
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
      <h2 className="heading-tertiary" style={{ textAlign: "center", fontWeight:"bold", backgroundColor:"rgb(211,211,211, .50)", width:"85%", margin:"20px auto" }}>Press the Spin button to select a random restaurant!</h2>
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
        {this.state.results.length && this.state.clicked === true ? <Winner wait={6300} result={this.state.results[this.state.z]} /> : this.renderEmptyState()}
        <div id="wheel">
          <div id="inner-wheel">
            {FinalResults}
          </div>

          <div id="spin" onClick={this.spinPick}>
            <div id="inner-spin"></div>
          </div>

          <div id="shine"></div>
        </div>
        <Link to="/search"
          className={window.location.pathname === "/search" ? "nav-link active moreInfo" : "nav-link moreInfo"} variant="primary" size="lg" style={{ width: "85%", marginLeft: "auto", marginRight: "auto", marginTop:"5%" }}>
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
