import React from "react";
import Car from "./car";
import "./garage.css";

class Garage extends React.Component {
  doCarThingy(car) {
    return <Car car={car} className="card-text"></Car>;
  }

  render() {
    const { owner, cars } = this.props.ginfo;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h1 className="bg-primary pl-1 text-light card-title">
            {owner}&apos;s Garage
          </h1>
          {cars.map(this.doCarThingy)}
        </div>
      </div>
    );
  }
}

export default Garage;
