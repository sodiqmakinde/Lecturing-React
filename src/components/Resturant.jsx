import React from "react";

const Resturant = ({ fawaz, discount, product_name, visits }) => {
  return (
    <div className="each_rest">
      <img src={fawaz} alt="" />
      <h5>{discount}</h5>
      <p>{visits}</p>
      <h4>{product_name}</h4>
    </div>
  );
};

export default Resturant;
