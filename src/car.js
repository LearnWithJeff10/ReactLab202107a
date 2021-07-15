import React from "react";
import "./car.css";

class Car extends React.Component {
  state = {
    needsWork: false,
  };

  toggleCarReady = () => {
    this.setState({ needsWork: !this.state.needsWork });
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
            onClick={this.toggleCarReady}
            className={"btn btn-sm btn-primary ml-2 float-right"}
          >
            {this.state.needsWork ? "Make Available" : "Take out of service"}
          </button>
        </h2>
      </>
    );
  }
}

export default Car;
