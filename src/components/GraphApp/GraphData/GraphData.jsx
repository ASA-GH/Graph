import React from 'react';
import ChipProvider from '../context/ChipContext';
import Chips from '../containers/Chips';
import AddGraph from '../AddGraph/AddGraph';
import Card from '../Card/Card'

const GraphData = (props) => {
  return(
    <Card wrapperGraphData>
      <ChipProvider>
      <AddGraph />
      <Chips />
      </ChipProvider>
    </Card>
  );
};

export default GraphData;