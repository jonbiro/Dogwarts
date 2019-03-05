import React, { Component } from "react";

class NewPuppyForm extends Component {
  state = {
    name: "",
    house: "",
	  image1: "",
	  image2: "",
	  age: ""
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addPuppy(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
        />
        House:
        <select
          name="house"
          value={this.state.house}
          onChange={this.handleInput}
        ><option value="" selected disabled hidden>Choose House</option>
	        {this.props.houses.map((house,i) => <option key={i} value={house}> {house}</option>)}
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default NewPuppyForm;
