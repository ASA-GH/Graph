import React, {useState, useEffect} from "react";

const symbols = ['/', '—', '\\', '|', '/', '—', '\\', '+', '*'];

let Timer = ({onLoadData}) => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const timer =  setInterval(() => setCounter(counter + 1), 1000);
    onLoadData();
    return () => clearInterval(timer);
  }, [counter]);
  return <div>{symbols[counter % symbols.length]}</div>;
};

export default Timer;