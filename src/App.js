import React, { Component } from 'react'
class Student extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Parth',
      rollNo: this.props.rollNo
    };

  }

  handleClick = () => {
    console.log('button was clicked', this);
  }

  render(){
    return (
      <div> 
        <h1> hello Event Listener</h1>
        <button onClick={this.handleClick}> Click me</button>
      </div>
    )
  }
}

export default Student;