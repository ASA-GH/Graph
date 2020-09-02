import React, { useRef, useEffect, useState } from "react";
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { VictoryChart, VictoryArea, VictoryTheme, VictoryAxis, VictoryLine } from "victory";
import useResizeObserver from "./useResizeObserver";
import Timer from '../Store/Timer'




const Graphs = () => {
 
  let arrDate =  [new Date(1598803819466), new Date(1598803849566), new Date(1598803869666), new Date(1598853889766)]
  let arrValue =  [4, 14, 10, 15]
  let newData = {value: arrValue, data: arrDate}
  let State = useSelector(state => state);

let dataState = State[0].data;

console.log(State)


let f = (data) => {
  let result = [];
  for (const [index, value] of data.entries()) {

    let obj = JSON.parse(value);
    let obj1 = {x: new Date(obj.x.parseInt()), y:(obj.y)};
    console.log(obj1);
                
    result.push(obj1);
  }
   
  console.log(result);
  return result;
  
}

//console.log(f(arrDate, arrValue));
console.log("---------------------------------");
console.log('');
console.log('color');

console.log(dataState.dataset.length ? dataState.dataset[0].color : '!C!');

console.log('');
console.log('data');

console.log(dataState.dataset.length ? dataState.dataset[0].data: '!D!');
console.log('');

console.log('label');
console.log(dataState.dataset.length ? dataState.dataset[0].label : '!L!');
console.log('');

console.log('scale');
console.log(dataState.scale.length ? dataState.scale : 0 +', ' + 1);
console.log('');

console.log('dataState');
console.log(dataState);
console.log('');
scale:
console.log("---------------------------------");

const stopTimer = (e) => {setStop(true)}; 
const startTimer = (e) => {setStop(false)};       
    
    const svgRef = useRef();
    const wrapperRef = useRef();
    // const dimensions = useResizeObserver(wrapperRef);
    const [stop, setStop] = useState(true);



     let sampleData = {
       oneData:[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 5 },
      { x: 4, y: 4 },
      { x: 5, y: 2 },
      { x: 6, y: 4 },
      { x: 7, y: 6 },
      { x: 8, y: 5 },
      { x: 9, y: 3 }
    ],
    twoleData:[
      { x: 0, y: 10 },
      { x: 1, y: 10 },
      { x: 2, y: 5 },
      { x: 3, y: 8 },
      { x: 4, y: 4 },
      { x: 5, y: 0 },
      { x: 6, y: 1 },
      { x: 7, y: 6 },
      { x: 8, y: 2 },
      { x: 9, y: 6 },
      { x: 10, y: 9 }
    ],
    threeData:[
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 3, y: 3 },
      { x: 4, y: 0 },
      { x: 5, y: 4 },
      { x: 6, y: 9 },
      { x: 7, y: 6 },
      { x: 8, y: 9 }
    ]
  }

       
  return (
<Card wrapperGraphs>
 <div style={{width:'200px', height:'40px', display: "flex"}}>
 <div style={{width:'50px', height:'30px'}} >{stop == false ?  <Timer/> : <div>stop</div>}</div>
 <button style={{width:'50px', height:'30px'}} onClick={stopTimer} >stop</button>
 <button style={{width:'50px', height:'30px'}} onClick={startTimer} >start</button>
</div>
  <div>
    <svg width={2000} height={500}>
   
  {/* <VictoryLine
  interpolation="natural"
  // 
  data={sampleData}
/> */}
{/* <circle cx={150} cy={150} r={150} fill="#c43a31"/> */}
  <VictoryChart
    standalone={false}
    width={1500} height={500}
    theme={VictoryTheme.material}
    minDomain={{ y: 0 }}
    
  >
   {/* <VictoryAxis 
   
     orientation="bottom"
    // tickValues={dataState.scale.length ? dataState.scale : [0 , 1]}
    tickValues={arrDate}

    // domain={[0, 10]}
    theme={VictoryTheme.material}
    offsetY={40}
    offsetX={0}
    standalone={false}
  />
  <VictoryAxis 
     orientation="left"
    domain={[0, 20]}
    tickValues={arrValue}

    theme={VictoryTheme.material}
    offsetX={40}
    offsetY={0}
    standalone={false}
  /> */}

 {/* <VictoryLine
  interpolation="natural"
  style={{
    data: {
       stroke: dataState.dataset.length ? dataState.dataset[0].color : '!1!!', strokeWidth: 3
    }}}
  standalone={false}
  // x={null} y={null}
  data={sampleData.oneData}/> */}
<VictoryLine
  interpolation="natural"
  standalone={false}
  style={{
    data: {
       stroke: "#77DDE7", strokeWidth: 3
    }}}
  // x={null} y={null}
  data={dataState.dataset.length ? f(dataState.dataset[0].data): []}/>
  {/* <VictoryLine
  // interpolation="natural"
  standalone={false}
  // x={null} y={null}
  data={sampleData.threeData}
  style={{
    data: {
       stroke: "#E32636", strokeWidth: 6
    }
    // labels: {
    //   fontSize: 15, fill: "#c43a31", padding: 15
    // }
  }}
  // labels={({ datum }) => datum.x}
  
  
  /> */}
  </VictoryChart>
</svg>

  </div>
</Card>
  );

};
export default Graphs;