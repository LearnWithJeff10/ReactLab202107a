import React from "react";
import Car from "./car";

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.owner}&apos;s Garage</h1>
        <Car
          make={this.props.car1.make}
          tag={this.props.car1.tag}
          color={this.props.car1.color}
          year={this.props.car1.year}
        />
        <Car
          make={this.props.car2.make}
          tag={this.props.car2.tag}
          color={this.props.car2.color}
          year={this.props.car2.year}
        />
      </div>
    );
  }
}

export default Garage;
