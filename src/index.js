import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

const cars = [
  {
    make: "Ford",
    model: "Mustang",
    year: 2019,
    color: "red",
    tag: "FL ABC123",
  },
  {
    make: "Chevrolet",
    model: "Corvette",
    year: 1967,
    color: "blue",
    tag: "FL GO2FST",
  },
  {
    make: "Honda",
    model: "CR-V",
    year: 2019,
    color: "green",
    tag: "ME GAS314",
  },
  {
    make: "Hyundai",
    model: "Elantra",
    year: 2020,
    color: "black",
    tag: "NV TSLA",
  },
  {
    make: "Tesla",
    model: "Model X Plaid",
    year: 2021,
    color: "silver",
    tag: "CA SPCBALL",
  },
];

const garages = [
  { owner: "Jeff", cars: cars.slice(0, 2) },
  { owner: "Elon", cars: cars.slice(2, 5) },
];

ReactDOM.render(
  <div>
    <Garage ginfo={garages[0]}></Garage>
    <Garage ginfo={garages[1]}></Garage>
  </div>,
  document.getElementById("root")
);
