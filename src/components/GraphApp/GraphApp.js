import React from 'react';
import Graphs from './Graphs/Graphs';
import Card from './Card/Card'
import AddGraph from './AddGraph/AddGraph'
import Chips from './containers/Chips'

import ChipProvider from './context/ChipContext';

const GraphApp = (props) => {
  return (
      <Card wrapperGraphApp >
       <ChipProvider>
        <Card wrapperGraphData>
         <AddGraph />
         <Chips />
        </Card>
        <Graphs /> 
       </ChipProvider>
      </Card> 
  )
  }
  export default GraphApp;

