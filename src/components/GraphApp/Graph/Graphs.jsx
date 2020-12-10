import React, { useState } from "react";
import Card from '../Card/Card'
import { VictoryChart,
         VictoryTheme,
         VictoryAxis,
         VictoryLine } from "victory";
import Timer from '../Store/Timer'
import play from '../Ikonate/svg/play.svg';
import pause from '../Ikonate/svg/pause.svg';
import useDimensions from "react-use-dimensions";

const Graphs = ( {data, onLoadData} ) => {
 const Normalization = (data) => {
  let result = [];
  for (const [index, value] of data.entries()) {
    result.push({x: new Date (Number(value.x)), y:Number(value.y)})}
  return result;
 }
 const [stop, setStop] = useState(true);
 const StopTimer = (e) => {setStop(true)};
 const StartTimer = (e) => {setStop(false)};
 const [measureRef, { width, height }] = useDimensions();
 return (
  <Card wrapperGraphs>
    <Card wrapperControl>
      <Card wrapperTimer>{stop === false ?  <Timer onLoadData={onLoadData}/> : <div>stop</div>}
      </Card>
      <div className = 'controlButton' onClick={StopTimer} >
        <div className = 'innerButton'>
          <img className ='playSvg' src ={pause} alt='||' />
        </div>
      </div>
      <div className = 'controlButton' onClick={StartTimer} >
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
          scale={{ x: "time" , y: "linear"}}
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
              data && data.map(obj => (
                  <VictoryLine
                     interpolation="monotoneX"
                     scale={{ x: "time" , y: "linear"}}
                     style={{ data: { stroke: obj.color, strokeWidth: 1.5 }}}
                     data = {Normalization(obj.data)}/>
                ))
            }
       </VictoryChart>
     </svg>
    </div>
  </Card>
 )

};
export default Graphs;