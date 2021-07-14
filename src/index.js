import React from "react";
import ReactDOM from "react-dom";
import Garage from "./garage";

var jeffCar2 = {
  make: "Chevy:",
  color: "blue",
};

ReactDOM.render(
  <div>
    <Garage
      owner="Jeff"
      car1={{ make: "Ford", color: "red", year: 2019, tag: "FL ABC123" }}
      car2={jeffCar2}
    />
    <Garage
      owner="Elon"
      car1={{ make: "Hyundai", color: "black", year: 2020, tag: " VA ILU4EVR" }}
      car2={jeffCar2}
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
