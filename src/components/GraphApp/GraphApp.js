import React from 'react';
import Graphs from './Graph/Graphs';
import Card from './Card/Card'
import AddGraph from './Graph/AddGraph'
import Chips from './Chip/Chips'

const GraphApp = (props) => {
  return (
    <Card wrapperGraphApp >
      <Card wrapperGraphData>
        <AddGraph />
        <Chips />
      </Card>
      <Graphs />
    </Card>
  )
}
export default GraphApp;

