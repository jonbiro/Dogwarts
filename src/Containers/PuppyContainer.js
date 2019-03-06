import React from "react";
import PuppyCard from '../Components/PuppyCard'

export default class PuppyContainer extends React.Component {

 

  render() {
    const mappedArray = this.props.puppies.map(puppy => (
      <PuppyCard
        key={puppy.id}
        puppy={puppy}
        image={puppy.image1}
        renderAdditionalInfo={this.renderAdditionalInfo}
        houses={this.props.houses}
        houseChange={this.props.houseChange}
        
      />)
    )

    return(
      <div>
        <h1>Hairy Pupper and the Chamber of MilkBones</h1>
        <br/><br/>
        {mappedArray}
        <hr/>
      </div>
    );
  }
}
