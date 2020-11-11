import React, { useContext } from 'react'
import { Mycontext } from './App';

const Guest = () => {
    const [name, value, handleClickContext] = useContext(Mycontext)

    return (
        <div>
            <h4>guest component</h4>

            <div>
                <h3>name : {name} value: {value}</h3>
                <button onClick={handleClickContext}>increase</button>
            </div>

        </div>
    )
}

export default Guest
