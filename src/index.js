import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

ReactDOM.render(
  <div>
    <Garage owner="Jeff" car1="Ford" car2="Chevy" />
    <Garage owner="Elon" car1="Honda" car2="Hyundai" />
  </div>,
  document.getElementById("root")
);
