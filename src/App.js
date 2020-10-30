import React, {useState, useEffect} from 'react'

export default function App (){
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(50);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCountDown(countDown - 1);
  };

  useEffect(() => {
    console.log('useEffect called')
  }, [count])
//passing array args as optional. here only count uses the useEffect as it is passing to the array



  return <React.Fragment>
    <h1>Count Up : {count}</h1>
    <button type='button' onClick={handleIncrement}> Increment </button>
    
    <h1>Count down : {countDown}</h1>
    <button type='button' onClick={handleDecrement}> Decrement </button>
  </React.Fragment>

}