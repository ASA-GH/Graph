import React from 'react';
import Graphs from './Graphs/Graphs';
import Card from './Card/Card'
import AddGraph from './AddGraph/AddGraph'
import Chips from './containers/Chips'

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

