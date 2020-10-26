import React, {Component} from 'react';

// //functional component
// const Student = (prop) => {
//   return <h1>Hello {prop.name}</h1>
// }

//class component
class Student extends Component{
  render(){
    return <h1> Hello {this.props.name}</h1>;
  }
}

export default Student;
