
import RestaurantList from '../components/RestaurantList/index';
import SearchForm from '../components/SearchForm/index';
import React, { Component } from 'react';
import Search from '../components/Search';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null,
      searchFoodQuery: null,
      fPrices: null,
      fRating: null
    };
  }

  onFormSubmit = (searchLocationQuery, searchFoodQuery, fPrices, fRating) => {
    this.setState({
      searchLocationQuery: searchLocationQuery,
      searchFoodQuery: searchFoodQuery,
      fPrices: fPrices,
      fRating: fRating
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <SearchForm onFormSubmit = {this.onFormSubmit}/>
        <Search />
        <RestaurantList 
          searchLocationQuery = {this.state.searchLocationQuery}
          searchFoodQuery = {this.state.searchFoodQuery}
          fPrices = {this.state.fPrices}
          fRating = {this.state.fRating}/> 
        <Footer />
      </div>
    );
  }
}
export default App;


