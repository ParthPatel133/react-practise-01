import React, { Component } from 'react'
import Student from './Student'

export default class App extends Component {
  constructor(props){
    super(props);
    console.log('App constructor called');
    console.log(props);
    this.state = {
      roll: '133'
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log('App - get derived state from props');
    console.log(props, state);
    return null
    //must return null or object
  }

  componentDidMount(){
    //get data from server and set tha data to State
    console.log('app - componendidmount Mounted')
  }

  render() {
    console.log('app rendered');
    return (
      <div>
      <Student name='Parth' />
      </div>
    ) 
  }
}
