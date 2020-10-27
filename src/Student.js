import React, { Component } from "react";
import Marks from "./Marks";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      roll: 133,
    };
  }
  clickHandle = () => {
    console.log("button clicked");
    // this.setState({ roll: 102 });
    this.setState({ roll: this.state.roll + 2 });
  };
  render() {
    console.log("student rendered");
    return (
      <div>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickHandle}> change</button>
      </div>
    );
  }
}
