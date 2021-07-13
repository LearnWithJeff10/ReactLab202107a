import React from "react";

class Car extends React.Component {
  render() {
    const { color, year, make, model, tag } = this.props.car;
    return (
      <h2 className="car" style={{ color: color }}>
        Hi, I am a {color} {year} {make} {model} with tag {tag}
      </h2>
    );
  }
}

export default Car;
