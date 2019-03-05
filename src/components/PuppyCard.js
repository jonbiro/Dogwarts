import React from "react";
import { Card, Icon } from "semantic-ui-react";
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
    return (
      <div>
        <Card image={this.props.image} header={this.props.puppy.name} onClick={this.handleHouseClick} />

        <div>
          {this.state.showForm ? (
            <UpdateForm />
          ) : (
           null
          )}
        </div>
      </div>
    );
  }
}

export default PuppyCard;
