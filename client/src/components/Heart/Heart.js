import React, { Component } from "react";
import HeartCheckbox from 'react-heart-checkbox';


 
class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
 
  onClick = (event, props) => {
    this.setState({ checked: !this.state.checked });
  }
 
  render() {
    const { checked } = this.state;
 
    return (
      <>
        <HeartCheckbox checked={checked} onClick={this.onClick} />
      </>
    );
  }
}
 
export default Heart;