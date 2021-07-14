import React from "react";

class Car extends React.Component {
  render() {
    return (
      <h2>
        I am a {this.props.color} {this.props.year} {this.props.make} with tag{" "}
        {this.props.tag}!
      </h2>
    );
  }
}

export default Car;
