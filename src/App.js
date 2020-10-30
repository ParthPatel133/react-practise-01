import React, { useState } from 'react';


export default function App() {
  const [name, setName] = useState('Parth');
  const [roll, setRoll] = useState(133);
  // const name = nameStateVariable[0];
  // const setName = nameStateVariable[1];

  const handleClick = () => {
    setName('parth new state');
    setRoll(101);
  };

  return <React.Fragment>
  <h1> {name} and roll no is {roll}</h1>
  <button onClick={handleClick}> Change the state</button>
  </React.Fragment>
}