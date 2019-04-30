import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import "./style.css";

class RestaurantList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            errorState: null,
            loading: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.searchLocationQuery !== prevProps.searchLocationQuery || this.props.searchFoodQuery !== prevProps.searchFoodQuery || this.props.fPrices !== prevProps.fPrices || this.props.fRating !== prevProps.fRating) {

            this.setState({
                results: [],
            }, () => this.getRestaurants(this.props.searchLocationQuery, this.props.searchFoodQuery, this.props.fPrices, this.props.fRating))
        }
    }


    getRestaurants = (locationSearched, foodType, fPrice, fRating) => {
        this.setState({ loading: true })


        if (!fRating) {
            axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}&term=${foodType}`, {
            headers: {
                Authorization: `Bearer ${'jfKBdYwg2HcVvonXCl5dzGyumNbjmyezKnEVZ17MLE3mqWJX5UG__z0Zz9darrUiD8Eb8j6a0vg90MJuBZC58wRwOfbm_BzSXD0Q7_j4DaNzlFsHWovPzN_TihutXHYx'}`
            },
            params: {
                limit: 6
            }
        })
            .then((res) => {
                console.log(res.data.businesses)
                // console.log(res.data.businesses)
                this.setState({ results: res.data.businesses, loading: false })
            })
            .catch((err) => {
                this.setState({ errorState: "Sorry" })
            })
        } else {
            axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}&term=${foodType}&price=${fPrice}&sort_by=${fRating}`, {
                headers: {
                    Authorization: `Bearer ${'jfKBdYwg2HcVvonXCl5dzGyumNbjmyezKnEVZ17MLE3mqWJX5UG__z0Zz9darrUiD8Eb8j6a0vg90MJuBZC58wRwOfbm_BzSXD0Q7_j4DaNzlFsHWovPzN_TihutXHYx'}`
                },
                params: {
                    limit: 6
                }
            })
                .then((res) => {
                    console.log(res.data.businesses)
                    this.setState({ results: res.data.businesses, loading: false })
                })
                .catch((err) => {
                    this.setState({ errorState: "Sorry" })
                })
        }
    }

    renderEmptyState() {
        return (
            <h2 className="heading-tertiary" style={{ textAlign: "center", backgroundColor:"rgba(211,211,211, .7)", width:"100%", margin: "auto" }}>Please Enter Your Zip Code and Food Choice, then Press Search!</h2>
        )
    }

    renderRestaurantInfo() {
        const RestaurantsList = this.state.results.map((result, i ) => {  
            return (
                <div className="RestaurantInfo" style={{ marginTop: "10px", marginBottom: "10px" }} key={result.id}>
                    <div className="row">
                        <div className="col-6" style={{ height: "150px", width: "125px", margin: "auto" }}>
                            <img className="search-RestaurantInfo__img" src={result.image_url} alt=""  />
                        </div>
                        <div className="col-6" style={{ height: "150px", width: "125px", margin: "auto" }}>
                            <h2 className="heading-tertiary search-RestaurantInfo__name" style={{ fontWeight: "bold", lineHeight: "1", paddingTop: "10px" }} >{result.name}</h2>
                        </div>
                    </div>

                    <img
                        src={require(`../../images/${result.rating}.png`)}
                        alt={`yelp ratings: ${result.rating}/5`}
                        className="RestaurantInfo__rating"
                        style={{ width: "initial" }} />


                    <p className="RestaurantInfo__reviewCount"> Based on {result.review_count} Reviews</p>

                    <Link to={{
                        pathname: "/results",
                        state: { id: this.state.results[i] }}}
                        style={{ width: "65%", display: "block", margin: "auto", position:"relative", bottom: "10px"}}>
                        More Info
                    </Link>
                 
                </div>
            );
        });

        return (
            <div className="RestaurantList__gallery">{RestaurantsList}</div>
        )
    }

    render() {
        return (

            <section className="RestaurantList" style={{marginBottom: "70px"}}>
                {this.state.results.length ? this.renderRestaurantInfo() : this.renderEmptyState()}

                {/*conditional rendering for error state - when this.state.errorState is not true*/}
                {!!this.state.errorState &&
                    <h1>{this.state.error}</h1>
                }
            </section>
        )
    }

}

export default RestaurantList;
