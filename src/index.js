import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

const cars = [
  {
    make: "Ford",
    model: "Mustang",
    color: "red",
    year: 2019,
    tag: "FL ABC123",
  },
  {
    make: "Chevrolet:",
    model: "Corvette",
    year: 1967,
    color: "blue",
    tag: "FL GO2FST",
  },
  {
    make: "Hyundai",
    model: "Elantra",
    color: "black",
    year: 2020,
    tag: " VA ILU4EVR",
  },
  {
    make: "Honda",
    model: "CR-V",
    year: 2019,
    color: "green",
    tag: "ME GAS314",
  },
  {
    make: "Tesla",
    model: "Model X",
    year: 2021,
    color: "silver",
    tag: "EL0NRCKS",
  },
];

ReactDOM.render(
  <div>
    <Garage owner="Jeff" car1={cars[0]} car2={cars[1]} car3={cars[1]} />
    <Garage owner="Elon" car1={cars[2]} car2={cars[3]} car3={cars[4]} />
  </div>,
  document.getElementById("root")
);
