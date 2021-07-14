import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

var jeffCar2 = {
  make: "Chevrolet:",
  model: "Corvette",
  year: 1967,
  color: "blue",
  tag: "FL GO2FST",
};

var elonCar2 = {
  make: "Honda",
  model: "CR-V",
  year: 2019,
  color: "green",
  tag: "ME GAS314",
};

ReactDOM.render(
  <div>
    <Garage
      owner="Jeff"
      car1={{
        make: "Ford",
        model: "Mustang",
        color: "red",
        year: 2019,
        tag: "FL ABC123",
      }}
      car2={jeffCar2}
    />
    <Garage
      owner="Elon"
      car1={{
        make: "Hyundai",
        model: "Elantra",
        color: "black",
        year: 2020,
        tag: " VA ILU4EVR",
      }}
      car2={elonCar2}
    />

    {/* <Garage
                  owner="Elon"
                  car1="Honda"
                  color1="green"
                  car2="Hyundai"
                  color2="black"
                /> */}
  </div>,
  document.getElementById("root")
);
