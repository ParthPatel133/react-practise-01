//---------CONTROLLED COMPONENT IN REACT FORMS------------
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    value: 'input value',
    valueTextarea: 'this is textarea'
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value.toUpperCase().substr(0, 10) })
  }

  handleTextarea = (e) => {
    this.setState({ valueTextarea: e.target.value.substr(0, 25) })
  }

  render() {
    return (
      <div>
        <form>
          <h2>controlled by react</h2>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <textarea
            value={this.state.valueTextarea}
            onChange={this.handleTextarea}
          />
        </form>
      </div>
    )
  }
}


