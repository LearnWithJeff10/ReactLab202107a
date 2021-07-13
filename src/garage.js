import React from "react";
import ReactDOM from "react-dom";
import Car from "./car";

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Jeff&apos;s Garage</h1>
        <Car make="Ford" />
        <Car make="Chevy" />
      </div>
    );
  }
}

export default Garage;
