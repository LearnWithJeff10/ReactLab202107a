import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

ReactDOM.render(
  <div>
    <Garage owner="Jeff" car1="Ford" color1="red" car2="Chevy" color2="blue" />
    <Garage
      owner="Elon"
      car1="Honda"
      color1="green"
      car2="Hyundai"
      color2="black"
    />
  </div>,
  document.getElementById("root")
);
