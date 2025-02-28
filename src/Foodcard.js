import React from "react";
import"./Foodcard.css";
const Foodcard = (props) => {
  console.log(props.Productname);

  return (
    <div>
      <img src={props.img} alt=""/>
      <h1>{props.Productname}</h1>
      </div>
  );
};

export default Foodcard