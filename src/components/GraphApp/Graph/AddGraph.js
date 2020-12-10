import React, {useMemo} from "react"
import Select from "react-select";
import './AddGraph.css';
import puls from '../Ikonate/svg/plus.svg';

const AddGraph = (props) => {
  const { labels, chips } = props;
  const { onAddNewChip } = props;

  const createOptionItem = (label) => { return { value: label, label: label } };

  const chipLabels = chips.map(c => c.label);
  let options = labels
    .filter(i => !chipLabels.includes(i))
    .map(createOptionItem);

  const useMemoAddGraph = useMemo(() => {
    var currentLabel;

    const HandleChipData = e => {
      console.log("HandleChipData: ", e);
      currentLabel = e.label;
    }

    const AddNewChip = e => {
      e.preventDefault();
      onAddNewChip(currentLabel);
    }

    return (
      <form onSubmit={AddNewChip} className='wrapperAddGraph'>
        <div className='wrapperSelectAddGraph'>
          <div className='innerSelectAddGraph'>
            <Select
            className='selectAddGraph'
            placeholder="-Graph-"
            options={options}
            onChange={HandleChipData}
            id="title"

            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
              ...theme.colors,
              primary25: '#0EAD69',
              neutral20: '#fff',
              primary:   '#0EAD69',
              primary50: '#0EAD69',
              neutral30: '#0EAD69',
              neutral40: '#0EAD69',
              neutral50: '#636261'
              }})}
            />
          </div>
        </div>
        <div/>
        <button className='buttonAddGraph'>
          <div className = 'innerButton'>
            <img className ='plusSvg' src ={puls} alt='+' />
          </div>
        </button>
      </form>
    )
  }, [options]);

  return useMemoAddGraph;
}

export default AddGraph;