import React from "react";

class UpdateForm extends React.Component {
  renderOptions = () => {
    return this.props.houses.map(house => (
      <option key={house} value={house}>
        {" "}
        {house}{" "}
      </option>
    ));
  };

  handleSelectChange = event => {
    console.log(this.props);
    let bob = () => {
      if (event.target.value === "Roverclaw") {
        return 3;
      } else if (event.target.value === "Slobberin") {
        return 4;
      } else if (event.target.value === "Gryffindog") {
        return 1;
      } else if (event.target.value === "Rufflepuff") {
        return 2;
      }
    };
    this.props.houseChange(this.props.puppy, bob());
  };

  render() {
    return (
      <div>
        <select
          value={this.props.puppy.house}
          onChange={this.handleSelectChange}
        >
          {this.renderOptions()}
        </select>
        <button onClick={this.props.handleHouseClick}>Done</button>
      </div>
    );
  }
}

export default UpdateForm;
