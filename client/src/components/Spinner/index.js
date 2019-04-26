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
        loading: false
    };
  }


  componentDidMount() {
    
    this.getRestaurants();
}

componentDidUpdate(prevProps, prevState) {
    if (this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
        this.setState({
            results: [],
        }, () => this.getRestaurants(this.props.searchLocationQuery, this.props.searchFoodQuery))
    }


}


getRestaurants = () => {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;

    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${crd.latitude}&longitude=${crd.longitude}`, {
      headers: {
          Authorization: `Bearer ${'jfKBdYwg2HcVvonXCl5dzGyumNbjmyezKnEVZ17MLE3mqWJX5UG__z0Zz9darrUiD8Eb8j6a0vg90MJuBZC58wRwOfbm_BzSXD0Q7_j4DaNzlFsHWovPzN_TihutXHYx'}`
      },
      params: {
          limit: 20
      }
  }).then((res) => {
      console.log(res.data.businesses)
      this.setState({ results: res.data.businesses, loading: false })
  })
  .catch((err) => {
      console.log(err);
  })
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
  

  
  
            
}

  render() {
    return (

      <div id="wrapper">
        <Winner />
        <div id="wheel">
          <div id="inner-wheel">
            <div className="sec"></div>
            <div className="sec"></div>
            <div className="sec"></div>
            <div className="sec"></div>
            <div className="sec"></div>
            <div className="sec"></div>
          </div>

          <div id="spin">
            <div id="inner-spin"></div>
          </div>

          <div id="shine"></div>
        </div>
        <Link to="/search"
          className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} variant="primary" size="lg" style={{ width: "100%" }}>
          Want something more specific?
      </Link>
      </div>
    )
  };
}

export default Spinner;
