import React, { Component } from "react";

export default class Marks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mroll: this.props.roll,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("marks - get derived state from props");
    console.log(props, state);
    if (props.roll !== state.mroll) {
      return { mroll: props.roll };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.mroll < 140) {
      console.log("marks - shouldComponentUpdate");
      console.log(nextProps, nextState);
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("marks- get snapshot before update - it runs before update");
    console.log(prevProps, prevState);
    return 45;
  }

  componentDidUpdate(prevProps, prevState, snapShot){
      console.log('componentDidUpdate- It runs after update');
      console.log(prevProps, prevState, snapShot);
  }

  render() {
    console.log("marks rendered");
    return (
      <div>
        <h1>{this.state.mroll}</h1>
      </div>
    );
  }
}
