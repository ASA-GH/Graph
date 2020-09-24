import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {LOAD_DATA} from "./../Constants"

let Timer =()=>{
  const State = useSelector(state => state)
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const timer =  setInterval(() => setCounter(counter + 1), 1000);
    dispatch({ type: LOAD_DATA, labels: State[0].labels});
    return () => clearInterval(timer);
  }, [counter]);
  return <div>{counter}</div>;
};
export default Timer;
