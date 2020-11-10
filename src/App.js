//---------CONTROLLED COMPONENT IN REACT FORMS------------
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: 'your name',
    password: 'password'
  }

  handleChange = (e) => {
    // this.setState({ [e.target.name]: e.target.value })
    const value = e.target.name === 'password'
      ? e.target.value.toUpperCase().substr(0, 10)
      : e.target.value;
    this.setState({ [e.target.name]: value })
  }

  render() {
    return (
      <div>
        <form>
          <h2>controlled by react</h2>
          <label>
            name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <label>
            password:
            <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    )
  }
}


