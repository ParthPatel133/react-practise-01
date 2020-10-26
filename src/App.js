import React, { Component } from 'react'

//class component
class Student extends Component{

  //state without Constructor
  state  = {
    id: 1,
    name: 'Parth'
  };

  //arrow function Event Handler
  handleClick = (id, e) => {
    console.log(id); 
    console.log(e); 
  }


  render(){
    return (
      <div> 
        <h1>hello Event Listener {this.state.name}</h1>
        <button onClick={(e) => {this.handleClick(this.state.id, e)}}> event args with arrow function</button>
        <button onClick={this.handleClick.bind(this, this.state.id)}> event args with bind</button>
      </div>
    )
  }
}




export default Student;