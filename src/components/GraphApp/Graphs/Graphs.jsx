import React from 'react';
import {Line} from 'react-chartjs-2'; 
import Card from '../Card/Card'
const wwww = {
  labels: [100, 200, 300, 400, 600, 700, 800, 900, 1000],
  datasets: [
    {
      label: '1',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#f27173',
      borderColor: '#f27173',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#f27173',
      pointBackgroundColor: '#f27173',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#f27173',
      pointHoverBorderColor: '#f27173',
      pointHoverBorderWidth: 2,
      pointRadius: 10,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 80, 70],
    },
    {
      label: '2',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4BC0C0',
      borderColor: '#4BC0C0',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4BC0C0',
      pointBackgroundColor: '#4BC0C0',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#4BC0C0',
      pointHoverBorderColor: '#4BC0C0',
      pointHoverBorderWidth: 2,
      pointRadius: 10,
      pointHitRadius: 10,
      data: [60, 80, 60, 50, 80, 70, 45, 70, 40]
    },
    {
      label: '3',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#36A2EB',
      pointBackgroundColor: '#36A2EB',
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#36A2EB',
      pointHoverBorderColor: '#36A2EB',
      pointHoverBorderWidth: 2,
      pointRadius: 10,
      pointHitRadius: 10,
      data: [80, 40, 60, 70, 40, 40, 80, 50, 50]
    }
  ]
};
  const Graphs = (props) => {
  
      return (
        <Card wrapperGraphs>
          <Line  data={wwww}  options={{ maintainAspectRatio: false }}/>
        </Card>
      );
 
    }
  export default  Graphs;