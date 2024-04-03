import React from "react";
import "./Info.css";
const InfoMain = ({ name, skill, age, country, price, tech }) => {
  return (
    <div className="wrapper" style={{backgroundColor:tech? "green" : "red" }}>
      <div className="info">
        <h1>hello my name is {name}</h1>
        <h1>I am a {skill}</h1>
        <div className="header">
          <h2>{age}</h2>
          <h3>{country}</h3>
        </div>
        <h1 className="price">{price}</h1>
      </div>
    </div>
  );
};

export default InfoMain;
