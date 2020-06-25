import React from 'react';
import GraphData from './GraphData/GraphData';
import Graphs from './Graphs/Graphs';
import  Card from './Card/Card'

const GraphApp = (props) => {
  return (
      <Card wrapperGraphApp >
      <GraphData />
      <Graphs /> 
      </Card> 
  )
  }
  export default GraphApp;

