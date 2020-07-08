import React from "react";
import { Line } from 'react-chartjs-2';
import Card from '../Card/Card'
import { useSelector } from 'react-redux'

const Graphs = (props) => {
  const chips = useSelector(state => state)
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
  }

  return (
    <Card wrapperGraphs>
      <Line data={createData(chips)} options={{ maintainAspectRatio: false }} />
    </Card>
  );

}
export default Graphs;