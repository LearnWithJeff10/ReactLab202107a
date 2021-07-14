import React from "react";
import Car from "./car";

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.owner}&apos;s Garage</h1>
        <Car car={this.props.car1} />
        <Car car={this.props.car2} />
      </div>
    );
  }
}

export default Garage;
