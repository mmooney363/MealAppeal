import React, {Component} from 'react';


class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            searchLocationQuery: "",
            searchFoodQuery: ""
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    
        const { searchLocationQuery, searchFoodQuery } = this.state;
        console.log(searchFoodQuery);
        console.log(searchLocationQuery);
        this.props.onFormSubmit(searchLocationQuery, searchFoodQuery);
    }

    render(){
        return (
            <div className = "searchForm">
                {/*add an event listener of form submit so the state only get set when the form is submitted*/}
                <form style = {{padding: "0 15px"}} onSubmit={(e) => this.handleFormSubmit(e)}>
                    <label 
                    htmlFor = 'location'
                    arialabel = 'Enter Address or Zip Code'
                    className = 'searchForm__label'
                    style = {{textAlign: "center", width: "100%", marginTop: "10px"}}
                    ></label>
                    <input 
                    type = 'text'
                    id = 'location'
                    name = 'searchLocationQuery'
                    placeholder = 'Enter Address or Zip Code'
                    value = {this.state.searchLocationQuery}
                    onChange = {this.handleSearchChange}
                    className = 'searchForm__input'
                    style = {{height: "20px"}}
                    />
                    <input 
                    type = 'text'
                    id = 'food'
                    name = 'searchFoodQuery'
                    placeholder = 'Enter Food'
                    value = {this.state.searchFoodQuery}
                    onChange = {this.handleSearchChange}
                    className = 'searchForm__Foodinput'
                    style = {{height: "20px"}}
                    />
                    <button 
                    type = 'submit'
                    className = 'searchForm__button'
                    >Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchForm
