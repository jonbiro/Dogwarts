import React, { Component } from "react";

class NewPuppyForm extends Component {
  state = {
    name: "",
    house: "",
    image1: "",
    image2: ""
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
    this.setState({ name: "", house: "", image1: "", image2: "" });
  };

  render() {
    return (
      <section className="newPup">
        <h2 className="pottify">New Pup</h2>
        <form className='pad' onSubmit={this.handleSubmit}>
          <div>
            <label className="bob">Name: </label>
            <input
              required
              onChange={this.handleInput}
              type="text"
              name="name"
              value={this.state.name}
            />
          </div>
          <div>
            <label className="bob">Image 1: </label>
            <input
              required
              onChange={this.handleInput}
              type="text"
              name="image1"
              value={this.state.image1}
            />
          </div>
          <div>
            <label className="bob">Image 2: </label>
            <input
              required
              onChange={this.handleInput}
              type="text"
              name="image2"
              value={this.state.image2}
            />
          </div>
          <div>
            <label className="bob">House: </label>
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
