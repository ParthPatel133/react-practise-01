import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount(){
    console.log('app mounted')
  }

  componentWillUnmount(){
    console.log('app unmounted')
  }
  render() {
    console.log('app rendered')
    return (
      <div>
        <h1>hello app component</h1>
      </div>
    )
  }
}
