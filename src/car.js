import React from "react";

class Car extends React.Component {
  render() {
    const { make, model, year, color, tag } = this.props.car;

    return (
      <h2 style={{ color: color }}>
        I am a {color} {year} {make} {model} with tag {tag}!
      </h2>
    );
  }
}

export default Car;
