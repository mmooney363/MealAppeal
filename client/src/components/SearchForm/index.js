import React, { Component } from 'react';
import './style.css';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchLocationQuery: "",
            searchFoodQuery: "",
            fPrices: "",
            fRating: ""
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const { searchLocationQuery, searchFoodQuery, fPrices, fRating } = this.state;
        console.log(searchFoodQuery);
        console.log(searchLocationQuery);
        console.log(fPrices);
        console.log(fRating);

        this.props.onFormSubmit(searchLocationQuery, searchFoodQuery, fPrices, fRating);
    }

    render() {
        return (
            <div className="searchForm">
                {/*add an event listener of form submit so the state only get set when the form is submitted*/}
                <form style={{ padding: "0 15px" }} onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label
                        htmlFor='location'
                        arialabel='Enter Address or Zip Code'
                        className='searchForm__label'
                        style={{ textAlign: "center", width: "100%", marginTop: "10px" }}
                    ></label>
                    <input
                        type='text'
                        id='location'
                        name='searchLocationQuery'
                        placeholder='Enter Address or Zip Code'
                        value={this.state.searchLocationQuery}
                        onChange={this.handleSearchChange}
                        className='searchForm__input'
                        style={{ height: "20px" }}
                        required
                    />
                    <input
                        type='text'
                        id='food'
                        name='searchFoodQuery'
                        placeholder='Enter Food'
                        value={this.state.searchFoodQuery}
                        onChange={this.handleSearchChange}
                        className='searchForm__Foodinput'
                        style={{ height: "20px" }}
                    />
                    <select id="lang" name='fPrices' onChange={this.handleSearchChange} value={this.state.fPrices}>
                        <option value="select">Select a Price Range</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                    <select id="lang" name='fRating' onChange={this.handleSearchChange} value={this.state.fRating}>
                        <option value="select">Sort By</option>
                        <option value="rating">Highest Rated</option>
                        <option value="best_match">Recommended</option>
                        <option value="review_count">Most Reviewed</option>
                    </select>
                    <button
                        type='submit'
                        className='searchForm__button'
                    >Search
                    </button>

                </form>
            </div>
        );
    }
}


export default SearchForm
