import React from "react";
import Car from "./car";

class Garage extends React.Component {
  doCarThingy(car) {
    return <Car car={car}></Car>;
  }

  render() {
    return (
      <div>
        <h1>{this.props.owner}&apos;s Garage</h1>
        {this.props.cars.map(this.doCarThingy)}
      </div>
    );
  }
}

export default Garage;
