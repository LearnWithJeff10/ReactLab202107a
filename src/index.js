import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

ReactDOM.render(
  <div>
    <Garage
      owner="Jeff"
      car1={{
        make: "Ford",
        model: "Mustang",
        year: 2019,
        color: "red",
        tag: "FL ABC123",
      }}
      car2={{
        make: "Chevrolet",
        model: "Corvette",
        year: 1967,
        color: "blue",
        tag: "FL GO2FST",
      }}
    ></Garage>
    <Garage
      owner="Elon"
      car1={{
        make: "Honda",
        model: "CR-V",
        year: 2019,
        color: "green",
        tag: "ME GAS314",
      }}
      car2={{
        make: "Hyundai",
        model: "Elantra",
        year: 2020,
        color: "black",
        tag: "NV TSLA",
      }}
    ></Garage>{" "}
  </div>,
  document.getElementById("root")
);
