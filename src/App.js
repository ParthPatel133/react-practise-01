//-----UNCONTROLLED COMPONENT------- createRef-----------
//it is used in focus, animation and other small tasks

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    //creating ref
    this.textInput = React.createRef();
  }

  componentDidMount = () => {
    // console.log(this.textInput.current);
    this.textInput.current.focus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: this.textInput.current.value });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Your submited name: {this.state.value}</h2>
        <form onSubmit={this.handleSubmit}>
          Name: <input type='text' ref={this.textInput} />
          <br />
          <br />
          Password: <input type='password' />
          <br />
          <br />
          <input type='submit' value="submit" />

        </form>
      </React.Fragment>

    )
  }
}
