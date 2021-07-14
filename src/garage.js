import React from "react";
import Car from "./car";
//import "./garage.css";

class Garage extends React.Component {
  render() {
    const { owner, cars } = this.props.ginfo;
    return (
      <div className="card mb-3">
        <div className="garage card-body bg-light">
          <h1 className="card-title text-light bg-primary pl-1">
            {owner}&apos;s Garage
          </h1>
          {cars.map((car) => (
            <Car car={car} />
          ))}
        </div>
      </div>
    );
  }
}

export default Garage;
