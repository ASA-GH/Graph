import React from 'react';
import GraphData from './GraphData/GraphData';
import Graphs from './Graphs/Graphs';
import Card from './Card/Card'
import GraphsProvider from './context/GraphsProvider';

const GraphApp = (props) => {
  return (
      <Card wrapperGraphApp >
      <GraphData />
      <GraphsProvider>
       <Graphs /> 
      </GraphsProvider>
      </Card> 
  )
  }
  export default GraphApp;

