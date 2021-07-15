import React from "react";
import Car from "./car";

class Garage extends React.Component {
  doCarThingy(car) {
    return <Car car={car}></Car>;
  }

  render() {
    const { owner, cars } = this.props.ginfo;
    return (
      <div>
        <h1>{owner}&apos;s Garage</h1>
        {cars.map(this.doCarThingy)}
      </div>
    );
  }
}

export default Garage;
