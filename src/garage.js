import React from "react";
import ReactDOM from "react-dom";
import Car from "./car";

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.owner}&apos;s Garage</h1>
        <Car make={this.props.car1} />
        <Car make={this.props.car2} />
      </div>
    );
  }
}

export default Garage;
