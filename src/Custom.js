//this file for making custom hook
import {useState} from 'react'

export default function useCustomCounter(){
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    return {
        count,
        handleIncrement
    };
    //returning object
}