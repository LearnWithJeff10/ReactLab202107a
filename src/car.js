import React from "react";
import "./car.css";

class Car extends React.Component {
  state = {
    needsWork: false,
  };

  doSomething = () => {
    console.log("Setting needsWork to true");
    this.setState({ needsWork: true });
  };

  render() {
    const { make, model, year, color, tag } = this.props.car;

    return (
      <h2
        className={this.state.needsWork ? "needswork" : " "}
        style={{ color: color }}
      >
        I am a {color} {year} {make} {model} with tag {tag}!
        <button onClick={this.doSomething} className="btn btn-sm btn-warning">
          Not ready
        </button>
      </h2>
    );
  }
}

export default Car;
