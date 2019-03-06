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
    this.clearForm();
  };

  clearForm = () => {
    this.setState({ name: "", house: "", image1: "", image2: "", age: "" });
  };

  render() {
    return (
      <section className="new-character">
        <h2>New Pup</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              required
              onChange={this.handleInput}
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              required
              onChange={this.handleInput}
              type="number"
              name="age"
              value={this.state.age}
            />
          </div>
          <div>
            <label>Image 1</label>
            <input
              required
              onChange={this.handleInput}
              type="text"
              name="image1"
              value={this.state.image1}
            />
          </div>
          <div>
            <label>Image 2</label>
            <input
              required
              onChange={this.handleInput}
              type="text"
              name="image2"
              value={this.state.image2}
            />
          </div>
          <div>
            <label>House</label>
            <select
              name="house"
              value={this.state.house}
              onChange={this.handleInput}
            >
              <option value="" defaultValue disabled hidden>
                Choose House
              </option>
              {this.props.houses.map((house, i) => (
                <option key={i} value={house}>
                  {" "}
                  {house}
                </option>
              ))}
            </select>
          </div>
          <button>Make a Pup!</button>
        </form>
      </section>
    );
  }
}

export default NewPuppyForm;
