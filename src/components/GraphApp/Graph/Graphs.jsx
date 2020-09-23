import React, { useState } from "react";
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { VictoryChart, 
         VictoryTheme,
         VictoryAxis,
         VictoryLine } from "victory";
import Timer from '../Store/Timer'
import play from '../Ikonate/svg/play.svg';
import pause from '../Ikonate/svg/pause.svg';
import useDimensions from "react-use-dimensions";

const Graphs = () => {
 let State = useSelector(state => state);
 let dataState = State[0].data;
 let normalization = (data) => {
  let result = [];
  for (const [index, value] of data.entries()) {
    let obj = JSON.parse(value);
    let obj1 = {x: new Date (Number(obj.x)), y:Number(obj.y)};
    result.push(obj1);
  }
  return result;
 } 
const [stop, setStop] = useState(true);
const stopTimer = (e) => {setStop(true)};
const startTimer = (e) => {setStop(false)};
const [measureRef, { width, height }] = useDimensions();
 return (
  <Card wrapperGraphs>
    <Card wrapperControl>
      <Card wrapperTimer>{stop == false ?  <Timer/> : <div>stop</div>}
      </Card>
      <div className = 'controlButton' onClick={stopTimer} >
        <div className = 'innerButton'>
          <img className ='playSvg' src ={pause} alt='||' />
        </div>
      </div>
      <div className = 'controlButton' onClick={startTimer} >
        <div className = 'innerButton'>
          <img className ='playSvg' src ={play} alt='>' />
        </div>
      </div>
    </Card>
    <div className ='victoryChart' ref={measureRef}>
      <svg
          height="100%"
          preserveAspectRatio="none"
          width="100%"
          viewBox={"0 0  " + width + " " + height}
          pointerEvents=""> 
       <VictoryChart
          scale={{ x: "time" , y:"linear"}}
          standalone={false}
          theme={VictoryTheme.material}
          minDomain={{ y: 0 }}
          height={height}
          width={width}>
        <VictoryAxis 
          orientation="bottom"/>
        <VictoryAxis dependentAxis
          orientation="left"/>
            {
             dataState.dataset.map(obj => (
               <VictoryLine
                  interpolation="monotoneX"
                  scale={{ x: "time" , y:"linear"}}
                  style={{ data: { stroke: obj.color, strokeWidth: 1.5 }}}
                  data = {normalization(obj.data)}/>
             ))
            }
       </VictoryChart>
     </svg> 
    </div>
  </Card>
 )

};
export default Graphs;