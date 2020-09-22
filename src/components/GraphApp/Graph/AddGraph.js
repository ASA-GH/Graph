import React, {useMemo} from "react"
import Select from "react-select";

import { useDispatch, useSelector } from 'react-redux'
import './AddGraph.css';
import puls from '../Ikonate/svg/plus.svg';
import {IS_CONTAINS, LOAD_LABELS, CURENT_LABEL} from '../Constants'

const AddGraph = () => {
const dispatch = useDispatch()
const data = useSelector(state => state)
  
    let normalization = (data) => {
    let result = [];
    for (const [index, value] of data.entries()) {
      let obj = {label:value, value:value};
      result.push(obj);
    }
    return result;
  }
let options = data[0].items.length  ? normalization(data[0].items) : []
let curentLabel = data[0].curentLabel  ?  data[0].curentLabel : '';

const useMemoAddGraph = useMemo(() => {

  const handleChipData = e => {
     dispatch({ type: CURENT_LABEL, label:e.label});
  }
  const addNewChip = e => {
    e.preventDefault();
    dispatch({ type: IS_CONTAINS, title: curentLabel });
  }

  const getLabels = () => {
    if (!data[0].items.length){
      dispatch({ type: LOAD_LABELS});
    }
  }

  return (
    
    <form onSubmit={addNewChip} className='wrapperAddGraph'>
     <div className='wrapperInputAddGraph'>
     <div className='innerInputAddGraph'>
     <Select
    className='SelectAddGraph'
    placeholder="-Graph-"
   options={options}
    onMenuOpen={getLabels}
    onChange={handleChipData}
    id="title"

    theme={theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: 'green',
        // neutral20: 'blue',//рамка
        // primary: 'red', // фокус рамка
        // primary75: 'red',//?
        // primary50: 'red',// выделение в списке
        // danger: 'red',//?
        // dangerLight: 'red',//?
        // neutral0: 'red',  //фон не выделеный
        // neutral5: 'red',//?
        // neutral10: 'red',//?
        // neutral30: 'red',//фокус на рамку
        // neutral40: 'red',//фокус на стрелку
        // neutral50: 'red',//placeholder="-Graph-"
        // neutral60: 'red', //выделеная стрелка
        // neutral70: 'red',//?
        // neutral80: 'green'//?
      },
    })}
  
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