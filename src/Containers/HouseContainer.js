import React from "react";
import House from "../Components/House";

export default class HouseContainer extends React.Component {
  sortHouse = houseName => {
    return this.props.puppies.filter(puppy => puppy.house === houseName);
  };

  render() {
    return (
      <div>
        <ul className="houseContainer">
          {this.props.houses.map(house => (
            <House
              key={house}
              house={house}
              houses={this.props.houses}
              puppies={this.sortHouse(house)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
