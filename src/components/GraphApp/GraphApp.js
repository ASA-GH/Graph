import React from 'react';
import GraphDataContainer from './GraphData/GraphDataContainer';
import GraphsContainer from './Graphs/GraphsContainer';
import Card from './Card/Card';


const GraphApp = (props) => {
  return (
      <Card CardGraphApp >
        <GraphDataContainer />
        <GraphsContainer /> 
      </Card> 
  )
}

export default GraphApp;

