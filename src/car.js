import React from "react";

class Car extends React.Component {
  render() {
    return (
      <h2>
        Hi, I am a {this.props.car.color} {this.props.car.year}{" "}
        {this.props.car.make} {this.props.car.model} with tag{" "}
        {this.props.car.tag}{" "}
      </h2>
    );
  }
}

export default Car;
