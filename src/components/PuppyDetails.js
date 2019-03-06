import React from "react";

const PuppyDetails = (props) => {
  
  return (
	  <article className="puppy-section">
	  <div>
      <h1>Name: {props.puppy.name}</h1>
      <h3>House: {props.puppy.house}</h3>
    </div>
	  </article>
  )
};

export default PuppyDetails;
