import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import {LOAD_DATA} from "./../Constants"

 
// let Timer = setInterval(() => {
//  const chips = useSelector(state => state)
//  const dispatch = useDispatch()
//  dispatch({ type: LOAD_CHIP, chips: chips });
//  }, 
// 1000);
let Timer =()=>{
const dispatch = useDispatch()
const [counter, setCounter] = useState(0);
      useEffect(() => {
      dispatch({ type: LOAD_DATA});
      const timer =
        setInterval(() => setCounter(counter + 1), 1000);
      return () => clearInterval(timer);
    }, [counter]);
  
return <div>{counter}</div>;

  };
export default Timer;