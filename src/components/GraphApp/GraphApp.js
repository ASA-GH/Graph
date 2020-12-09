import React from 'react';
import PropTypes from 'prop-types';
import Graphs from './Graph/Graphs';
import Card from './Card/Card'
import AddGraph from './Graph/AddGraph'
import Chips from './Chip/Chips'
import { connect } from 'react-redux';
import { addChip, deleteChip, fetchData, fetchLabels } from '../../actions/actions'
import { getChipsContentSelector, getDataContentSelector, getLabelsContentSelector } from '../../selectors';

const GraphApp = (props) => {
  const { chips, data, labels } = props;
  const { addChip, deleteChip, fetchData, fetchLabels } = props;

  // console.log("props:", props);
  // console.log("chips:", chips);
  // console.log("labels:", labels);

  if (!labels.length) {
    console.log("* loading labels:", labels);
    fetchLabels();
  }

  const handleAddChip = label => {
    addChip(label);
  }

  const handleDeleteChip = chip => {
    deleteChip(chip);
  }

  const handleLoadData = () => {
    console.log("* loading data - chips:", chips);
    fetchData(chips);
  }

  return (
    <Card wrapperGraphApp >
      <Card wrapperGraphData>
        <AddGraph
          labels={labels}
          chips={chips ? chips.map(c => c.title) : []}
          onAddNewChip={handleAddChip}
        />
        <Chips chips={chips} onDeleteChip={handleDeleteChip}/>
      </Card>
      <Graphs data={data} onLoadData={handleLoadData}/>
    </Card>
  )
}

GraphApp.prototype = {
  chips: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    chips: getChipsContentSelector(state),
    data: getDataContentSelector(state),
    labels: getLabelsContentSelector(state),
  };
}

const mapDispatchToProps = {
  addChip,
  deleteChip,
  fetchData,
  fetchLabels
};

export default connect(mapStateToProps, mapDispatchToProps)(GraphApp);