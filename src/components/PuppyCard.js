import React from "react";
import { Card } from "semantic-ui-react";
import UpdateForm from "./UpdateForm";

class PuppyCard extends React.Component {
  state = {
    showForm: false
  };

  handleHouseClick = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  render() {
    // console.log(this.props)
    return (
      <div className="pupCard">
        <Card
          className="ui container center aligned"
          image={this.props.image}
          header={this.props.puppy.name}
          onClick={this.handleHouseClick}
        />

        <div>
          {this.state.showForm && !this.props.nope ? (
            <UpdateForm
              houses={this.props.houses}
              puppy={this.props.puppy}
              handleHouseClick={this.handleHouseClick}
              houseChange={this.props.houseChange}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default PuppyCard;
