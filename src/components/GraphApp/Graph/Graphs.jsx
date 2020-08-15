import React, { useRef, useEffect, useState } from "react";
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import {
  select,
  scaleLinear,
  line,
  max,
  curveCardinal,
  axisBottom,
  axisLeft,
  zoom,
  zoomTransform
} from "d3";
import useResizeObserver from "./useResizeObserver";






const Graphs = (props) => {

  const chips = useSelector(state => state)
  const createData = (chips) => {
    let data = {
      dataset: []
    };
    chips.map((chip) => {
      if (!chip.error) {
        let item = {
          label: chip.title,
          data: chip.data[0].data,
        };

        data.dataset.push(item);
      }
    })
    return data;
  };

   // const data = createData(chips);
const GetMax = (dataset) => {
  let result = 0;
  dataset.map((item) => {
    const m = max(item.data);
    if (result < m)
      result = m;
  });
  return result;
}

const GetLenght = (dataset) => {
  if (!dataset.length)
    return 0;
  return dataset[0].data.length - 1;
}

const data = {
  dataset: [
    {
    label: 'test1',
    data: [15, 50, 30, 40, 15, 50, 15]
    },
    {
    label: 'test2',
    data: [45, 55, 35, 45, 60, 45, 60]
    },
    {
    label: 'test3',
    data: [25, 35, 15, 25, 40, 25, 40]
    }
  ]
}



    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [currentZoomState, setCurrentZoomState] = useState();
  
    // will be called initially and on every data change
    useEffect(() => {
      const svg = select(svgRef.current);


      

      data.dataset.map((item) => {
      const svgContent = svg.select(".content");
      const { width, height } =
        dimensions || wrapperRef.current.getBoundingClientRect();
  
      // scales + line generator
      const xScale = scaleLinear()
        .domain([0, GetLenght(data.dataset)])
        .range([10, width - 10]);
  
      if (currentZoomState) {
        const newXScale = currentZoomState.rescaleX(xScale);
        xScale.domain(newXScale.domain());
      }
  
      const yScale = scaleLinear()
        .domain([0, GetMax(data.dataset)])
        .range([height - 20, 20]);
  
      const lineGenerator = line()
        .x((d, index) => xScale(index))
        .y(d => yScale(d))
        .curve(curveCardinal);
  
      // render the line

   
        svgContent
        .selectAll(".myLine")
        .append('svg')
        .enter()
        .data([item.data])
        .join("path")
        .attr("class", "myLine")
        .attr("stroke", "black")
        .attr("fill", "none")
        .attr("d", lineGenerator);
  
      svgContent
        .selectAll(".myDot")
        .append('svg')
        .enter()
        .data(item.data)
        .join("circle")
        .attr("class", "myDot")
        .attr("stroke", "black")
        .attr("r", 3)
        .attr("fill", "black")
        .attr("cx", (value, index) => xScale(index))
        .attr("cy", yScale);
   
     /* svgContent
        .selectAll(".myLine")
        .data([data.data])
        .join("path")
        .attr("class", "myLine")
        .attr("stroke", "black")
        .attr("fill", "none")
        .attr("d", lineGenerator);
  
      svgContent
        .selectAll(".myDot")
        .data(data.data)
        .join("circle")
        .attr("class", "myDot")
        .attr("stroke", "black")
        .attr("r", 4)
        .attr("fill", "orange")
        .attr("cx", (value, index) => xScale(index))
        .attr("cy", yScale);
  */
      // axes
      const xAxis = axisBottom(xScale);
      svg
        .select(".x-axis")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);
  
      const yAxis = axisLeft(yScale);
      svg.select(".y-axis").call(yAxis);
  

      // zoom
      const zoomBehavior = zoom()
        .scaleExtent([0.5, 5])
        .translateExtent([
          [0, 0],
          [width, height]
        ])
        .on("zoom", () => {
          const zoomState = zoomTransform(svg.node());
          setCurrentZoomState(zoomState);
        });

  
      svg.call(zoomBehavior);
    });
    }, [currentZoomState, data.data, dimensions]);
  
   
 /* const chips = useSelector(state => state)
  const createData = (chips) => {
    let data = {
      labels: [100, 200, 300, 400, 600, 700, 800, 900, 1000],
      datasets: []
    };
    chips.map((chip) => {
      if (!chip.error) {
        let item = {
          label: chip.title,
          data: chip.data[0].data,
          fill: false,
          lineTension: 0.1,
          backgroundColor: chip.color,
          borderColor: chip.color,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: chip.color,
          pointBackgroundColor: chip.color,
          pointBorderWidth: 1,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: chip.color,
          pointHoverBorderColor: chip.color,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          pointHitRadius: 5,
        };

        data.datasets.push(item);
      }
    })
    return data;
  }*/

  return (
    <Card wrapperGraphs>
<div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef}>
          <defs>
            <clipPath id={data.label}>
              <rect x="0" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>
          <g className="content" clipPath={`url(#${data.label})`}></g>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </Card>
  );

}
export default Graphs;