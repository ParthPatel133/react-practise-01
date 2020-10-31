import React from 'react'
import useCustomCounter from './Custom'

export default function App (){
  const data = useCustomCounter();
  return (
    <React.Fragment>
      <h1>Count Up {data.count}</h1>
      <button onClick={data.handleIncrement} >Increment</button>
    </React.Fragment>
  )
}