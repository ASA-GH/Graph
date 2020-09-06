import React, { useRef, useEffect, useState } from "react";
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { VictoryChart, 
         VictoryArea, 
         VictoryTheme,
         VictoryVoronoiContainer,
         VictoryTooltip, 
         VictoryAxis, 
         VictoryLine } from "victory";
import useResizeObserver from "./useResizeObserver";
import Timer from '../Store/Timer'




const Graphs = () => {
 
  let arrDate =  [new Date(1598803819466), new Date(1598803849566), new Date(1598803869666), new Date(1598853889766)]
  let arrValue =  [4, 14, 10, 15]
  let newData = {value: arrValue, data: arrDate}
  let State = useSelector(state => state);

let dataState = State[0].data;

console.log(State)


let normalization = (data) => {
  let result = [];
  for (const [index, value] of data.entries()) {

    let obj = JSON.parse(value);
    let obj1 = {x: new Date (Number(obj.x)), y:Number(obj.y)};
                
    result.push(obj1);
  }
   console.log(result);
  return result;
 } 
// console.log(a);
// const a =f(sampleData.threeData)

//console.log(f(arrDate, arrValue));
// console.log("---------------------------------");
// console.log('');
// console.log('color');

// console.log(dataState.dataset.length ? dataState.dataset[0].color : '!C!');

// console.log('');
// console.log('data');

// console.log(dataState.dataset.length ? dataState.dataset[0].data: '!D!');
// console.log('');

// console.log('label');
// console.log(dataState.dataset.length ? dataState.dataset[0].label : '!L!');
// console.log('');

// console.log('scale');
// console.log(dataState.scale.length ? dataState.scale : 0 +', ' + 1);
// console.log('');

// console.log('dataState');
// console.log(dataState);
// console.log('');
// console.log("---------------------------------");

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
      { x: new Date(1598803819000), y: 6 },
      { x: new Date(1598803820000), y: 1 },
      { x: new Date(1598803821000), y: 0 },
      { x: new Date(1598803822000), y: 1 },
      { x: new Date(1598803823000), y: 10 },
      { x: new Date(1598803824000), y: 18 },
      { x: new Date(1598803825000), y: 10 },
      { x: new Date(1598803826000), y: 5 }

    ],
    threeData:[
      { x: 1598803819466, y: 4 },
      { x: 1598803849566, y: 14 },
      { x: 1598803869666, y: 1 },
      { x: 1598803889766, y: 15 }
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
  <VictoryChart
  scale={{ x: "time" , y:"linear"}}
  // domain={{ y: [0, 20] }}
  // y0={0}
    standalone={false}
    width={1500} height={500}
    theme={VictoryTheme.material}
    minDomain={{ y: 0 }}
    // containerComponent={
    //   <VictoryVoronoiContainer voronoiDimension="x"
    //     labels={({ datum }) => `y: ${datum.y}`}
    //     labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}/>}
      >
  {/* <VictoryAxis dependentAxis
  orientation="left"
/> */}

    <VictoryAxis 
   
     orientation="bottom"/>
   {/*   // tickValues={dataState.scale.length ? dataState.scale : [0 , 1]}
   tickValues={arrDate}

    // domain={[0, 10]}
    theme={VictoryTheme.material}
    offsetY={40}
    offsetX={0}
    standalone={false}
  /> */}
  <VictoryAxis dependentAxis
     orientation="left"
    // tickValues={[0, 10,20]}

    // standalone={false}
  /> 
{
dataState.dataset.map(obj => (

<VictoryLine
  // labelComponent = {<VictoryTooltip />}  
  // interpolation="monotoneX"
  interpolation="linear"
  // y0={0}
  scale={{ x: "time" , y:"linear"}}

  // standalone={false}
  style={{
    // data: {
    //    stroke: "#77DDE7", strokeWidth: ({ active }) => active ? 4 : 2},
    //    labels: {fill: "tomato"}
    // 
    data: {
      stroke: obj.color, strokeWidth: 3}}}
  // x={null} y={null}
  
    // labels={({ datum }) => datum.y}
    data = {normalization(obj.data)}
    // data = {sampleData.twoleData}

    
    />

  ))

}
 </VictoryChart>
</svg>

  </div>
</Card>
  );

};
export default Graphs;