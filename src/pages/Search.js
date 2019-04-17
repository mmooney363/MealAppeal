
import RestaurantList from '../components/RestaurantList/index';
import SearchForm from '../components/SearchForm/index';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchLocationQuery: null
    };
  }

  onFormSubmit = (searchLocationQuery) => {
    this.setState({
      searchLocationQuery: searchLocationQuery
    })
  }

  render() {
    return (
      <div className="App">
        <SearchForm onFormSubmit = {this.onFormSubmit}/>
        <RestaurantList 
          searchLocationQuery = {this.state.searchLocationQuery}/> 
      </div>
    );
  }
}
export default App;


