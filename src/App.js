import React, { createContext } from 'react'
import { useState } from 'react'
import User from './User'
const Mycontext = createContext();
export { Mycontext }


const App = () => {
  const [name, setName] = useState('hello');
  const [value, setValue] = useState(0);

  const handleClickContext = () => {
    setValue(value + 1);
  }

  return (
    <Mycontext.Provider value={[name, value, handleClickContext]}>
      <User />
    </Mycontext.Provider>
  )
}

export default App
