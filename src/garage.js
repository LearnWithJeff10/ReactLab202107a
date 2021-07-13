import React from "react";
import Car from "./car";
import "./garage.css";

class Garage extends React.Component {
  render() {
    const { owner, cars } = this.props.ginfo;
    return (
      <div className="garage">
        <h1>{owner}&apos;s Garage</h1>
        {cars.map((car) => (
          <Car car={car} />
        ))}
      </div>
    );
  }
}

export default Garage;
