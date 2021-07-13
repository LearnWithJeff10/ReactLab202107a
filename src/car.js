import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }

  render() {
    return (
      <h2>
        Hi, I am {this.state.color} car made by {this.props.make}!
      </h2>
    );
  }
}

export default Car;
