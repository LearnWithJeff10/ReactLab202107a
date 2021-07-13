import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

ReactDOM.render(
  <div>
    <Garage owner="Jeff" />
    <Garage owner="Elon" />
  </div>,
  document.getElementById("root")
);
