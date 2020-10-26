import React, { Component } from 'react'

//function component
/*
function Student(props){
  // function handleClick(){
  //   console.log('button was clicked', this)
  // }

  const handleClick = () => {
    console.log('button was clicked', this)
  }

  return (
    <div>
      <h1>hello event Listener with function componemt {props.rollNo}</h1>
      <button onClick={handleClick}>Click here</button>
    </div>
  )
}
*/




//class component
class Student extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Parth',
      rollNo: this.props.rollNo
    };

  }

  handleClick = () => {
     this.setState((state, props) =>{
       //to update the state pass the function in which pass previous state and props
       console.log(state);
       console.log(props);
     }) 
  }

  render(){
    return (
      <div> 
        <h1>hello Event Listener {this.state.name} and roll no is {this.state.rollNo}</h1>
        <button onClick={this.handleClick}> Click me</button>
      </div>
    )
  }
}




export default Student;