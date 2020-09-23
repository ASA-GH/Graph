import React, {useMemo} from "react"
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux'
import './AddGraph.css';
import puls from '../Ikonate/svg/plus.svg';
import {IS_CONTAINS, LOAD_LABELS, CURENT_LABEL} from '../Constants'

const AddGraph = () => {
const dispatch = useDispatch()
const data = useSelector(state => state)
const Normalization = (data) => {
  let result = [];
  for (const [index, value] of data.entries()) {
    let obj = {label:value, value:value};
      result.push(obj);
     }
     return result;
}
let options = data[0].items.length  ? Normalization(data[0].items) : []
let curentLabel = data[0].curentLabel  ?  data[0].curentLabel : '';
const useMemoAddGraph = useMemo(() => {
  const HandleChipData = e => {
     dispatch({ type: CURENT_LABEL, label:e.label});
  }
  const AddNewChip = e => {
    e.preventDefault();
    dispatch({ type: IS_CONTAINS, title: curentLabel });
  }
  const GetLabels = () => {
    if (!data[0].items.length){
      dispatch({ type: LOAD_LABELS});
    }
  }
 return (
  <form onSubmit={AddNewChip} className='wrapperAddGraph'>
    <div className='wrapperSelectAddGraph'>
     <div className='innerSelectAddGraph'>
      <Select
       className='selectAddGraph'
       placeholder="-Graph-"
       options={options}
       onMenuOpen={GetLabels}
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
}, [curentLabel, options]);
 return useMemoAddGraph;
}
export default AddGraph;