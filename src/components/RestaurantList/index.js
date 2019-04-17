import React, { Component } from 'react';
import axios from 'axios';

class RestaurantList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            results: [],
            errorState: null,
            loading: false
        };
    }

    componentDidMount () {
        this.getRestaurants("Philadelphai, PA");
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.searchLocationQuery !== prevProps.searchLocationQuery) {
            this.setState({
                results: [],
            }, () => this.getRestaurants(this.props.searchLocationQuery))
            }
        }


    getRestaurants = (locationSearched) => {
        this.setState({ loading: true })

        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}`, {
            headers: {
                Authorization: `Bearer ${'jfKBdYwg2HcVvonXCl5dzGyumNbjmyezKnEVZ17MLE3mqWJX5UG__z0Zz9darrUiD8Eb8j6a0vg90MJuBZC58wRwOfbm_BzSXD0Q7_j4DaNzlFsHWovPzN_TihutXHYx'}`
            },
            params: {
                categories: 'restaurants',
                limit: 6
            }
        })
        .then((res) => {
            console.log(res.data.businesses)
            this.setState({ results: res.data.businesses, loading: false})
        })
        .catch((err) => {
            this.setState({ errorState: "Sorry"})
        })
    }

    renderEmptyState () {
        return (
            <h2 className = "heading-tertiary">Comin' right up! </h2>
        )
    }

    renderRestaurantInfo () {
        const RestaurantList = this.state.results.map((result) => {
            return (    
                <div 
                    className = "RestaurantInfo"
                    key = {result.id}
                >
                    <img src = {result.image_url} alt = "" className = "RestaurantInfo__img" />
                    <h2 className = "heading-tertiary RestaurantInfo__name">{result.name}</h2>
                    
                    <p className = "RestaurantInfo__para">
                    </p>
                    
                    <p className = "RestaurantInfo__para">
                    </p>

                    

                    <p className = "RestaurantInfo__reviewCount"> Based on {result.review_count} Reviews</p>
               
                    <a 
                        href= {result.url} 
                        className = "RestaurantInfo__website">
                            More infomration on Yelp
                    </a>

                    
                </div>  
            );
        });

        return(
            <div className="RestaurantList__gallery">{RestaurantList}</div>
        )
    }

    render() {
        return (
            
            <section className="RestaurantList">
                {this.state.results.length ? this.renderRestaurantInfo() : this.renderEmptyState()}

                {/*conditional rendering for error state - when this.state.errorState is not true*/}
                {!!this.state.errorState &&
                    <h1>{this.state.error}</h1>
                }   
            </section>
        )}

}
    
export default RestaurantList