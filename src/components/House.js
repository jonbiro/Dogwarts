import React from "react";
import PuppyCard from "./PuppyCard";
import {Link} from "react-router-dom";

const House = props => {
  let puppies = props.puppies.map(puppy => (
    <PuppyCard
      key={puppy.id}
      puppy={puppy}
      image={puppy.image2}
      houses={props.houses}
      houseChange={props.houseChange}
      nope={true}
    />
  ));
  let gryf =
    "https://pm1.narvii.com/6577/37d1ee51b2ba5e65bf28409f03e04f9eab979678_hq.jpg";
  let rover =
    "https://pm1.narvii.com/6577/b861e9cdbff40a0380a8410fadd9b3142929aa6f_hq.jpg";
  let ruff =
    "https://pm1.narvii.com/6577/6b1c74fd8ce0e51798a2f3afa309979d53349626_hq.jpg";
  let slob =
    "https://pm1.narvii.com/6577/4eeb4b1cae51d6e14ac015fe0bd6e26bda64f786_hq.jpg";
  
	// let click = (house) => this.props.history.push(`/${house}`);
	
  
  const bob = () => {
    if (props.house === "Gryffindog") {
      return (
	      <Link to='/Gryffindog'><img className="roundme" width="400px" src={gryf} alt={props.house}  /></Link>
      );
    } else if (props.house === "Roverclaw") {
      return (
	      <Link to='/Roverclaw'><img className="roundme" width="400px" src={rover} alt={props.house} /></Link>
      );
    } else if (props.house === "Slobberin") {
      return (
	      <Link to='/Slobberin'><img className="roundme" width="400px" src={slob} alt={props.house}  /></Link>
      );
    } else if (props.house === "Rufflepuff") {
      return (
	      <Link to='/Rufflepuff'> <img className="roundme" width="400px" src={ruff} alt={props.house}  /></Link>
      );
    }
  };

  return (
    <div>
      {bob()}
      <ul>{puppies}</ul>
    </div>
  );
};

export default House;
