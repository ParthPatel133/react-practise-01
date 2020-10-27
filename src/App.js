import React, { Component } from 'react'
import Student from './Student'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      roll: '133'
    }
  }

  render() {
    console.log('app rendered');
    return (
      <div>
      <Student />
      </div>
    ) 
  }
}
