import React from "react";
import "./car.css";

class Car extends React.Component {
  state = {
    needsWork: false,
  };

  handleCarReady = () => {
    this.setState({ needsWork: false });
  };

  handleCarNotReady = () => {
    this.setState({ needsWork: true });
  };

  render() {
    const { color, year, make, model, tag } = this.props.car;

    return (
      <>
        <h2
          className={
            "car card-text " + (this.state.needsWork ? "needswork" : "")
          }
          style={{ color: color }}
        >
          Hi, I am a {color} {year} {make} {model} with tag {tag}
          <button
            onClick={this.handleCarReady}
            className="btn btn-sm btn-success"
          >
            Ready
          </button>
          <button
            onClick={this.handleCarNotReady}
            className="btn btn-sm btn-warning"
          >
            Not Ready
          </button>
        </h2>
      </>
    );
  }
}

export default Car;
