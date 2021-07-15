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
  {
    make: "Porsche",
    model: "Boxster",
    year: 2018,
    color: "brown",
    tag: "PA BOXY18",
  },
];

const garages = [
  { owner: "Jeff", cars: cars.slice(0, 2) },
  { owner: "Elon", cars: cars.slice(2, 5) },
  { owner: "Richard", cars: cars.slice(5, 7) },
];

ReactDOM.render(
  <div>
    {garages.map((gi, index) => (
      <Garage ginfo={gi} key={index} />
    ))}
  </div>,
  document.getElementById("root")
);
