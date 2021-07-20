import React from "react";
import "./car.css";

class Car extends React.Component {
  state = {
    ready: true,
  };

  handleReady = () => {
    this.setState({ ready: !this.state.ready });
  };

  render() {
    const { make, model, year, color, tag } = this.props.car;

    return (
      <h2
        className={!this.state.ready ? "needswork" : " "}
        style={{ color: color }}
      >
        I am a {color} {year} {make} {model} with tag {tag}!
        <button
          onClick={this.handleReady}
          className={
            "btn btn-sm ml-2 " +
            (!this.state.ready ? "btn-success" : "btn-warning")
          }
        >
          {!this.state.ready ? "Ready" : "Needs Work"}
        </button>
      </h2>
    );
  }
}

export default Car;
