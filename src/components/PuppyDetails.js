import React from "react";

const PuppyDetails = ({puppy, handleHouseClick}) => {
  
  return (
	  <article className="puppy-section">
	  <div onClick={handleHouseClick}>
      <h1>Name: {puppy.name}</h1>
      <h3>House: {puppy.house}</h3>
    </div>
	  </article>
  )
};

export default PuppyDetails;
