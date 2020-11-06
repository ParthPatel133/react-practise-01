//css module style in react
//this will create local scope for styling component after importing

import React, { Component } from 'react'
import './App.css'
import Styles from './App.module.css'

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <h1 className={Styles.txt}>Hello external CSS</h1>
      </React.Fragment>
    )
  }
}

