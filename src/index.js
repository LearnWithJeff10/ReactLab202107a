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

const garages = [
  { owner: "Jeff", cars: cars.slice(0, 2) },
  { owner: "Elon", cars: cars.slice(2, 5) },
  { owner: "Richard", cars: [cars[0]] },
];

ReactDOM.render(
  <div className="container">
    {garages.map((ginfo) => (
      <Garage ginfo={ginfo} />
    ))}
  </div>,
  document.getElementById("root")
);
