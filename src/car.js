import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  render() {
    return (
      <h2>
        Hi, I am {this.props.color} car made by {this.props.make}!
      </h2>
    );
  }
}

export default Car;
