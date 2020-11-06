//inline css styling

import React, { Component } from 'react'

export default class App extends Component {

  render() {
    const btn = {
      color: 'blue'
    };
    const btnBg = {
      backgroundColor: 'orange'
    };
    return (
      <div>
        <button style={{...btn, ...btnBg, ...{fontSize : '100px'}}}>Button</button>
      </div >
    )
  }
}

