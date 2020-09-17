import React, { useState, useMemo} from "react"
import Select from "react-select";

import { useDispatch, useSelector } from 'react-redux'
import './AddGraph.css';
import puls from '../Ikonate/svg/plus.svg';

import {IS_CONTAINS, GET_LABELS} from '../Constants'

const AddGraph = () => {
const dispatch = useDispatch()
const data = useSelector(state => state)
 
let curentLabel = ""; 
const useMemoAddGraph = useMemo(() => {


  let normalization = (data) => {
    let result = [];
    for (const [index, value] of data.entries()) {
      let obj = JSON.parse(value);
      let obj1 = {label: obj};
      result.push(obj1);
    }
    return result;
   } 

  const handleChipData = e => {
     curentLabel = e.label;
  }
  const addNewChip = e => {
    e.preventDefault();
    dispatch({ type: IS_CONTAINS, title: curentLabel });
  }

  const getLabels = () => {
    console.log("!!!!!data");
     if (!data[0].items.lenght){
      console.log("!!!!!data1");
      dispatch({ type: GET_LABELS });
    }
  }


  return (
    <form onSubmit={addNewChip} className='wrapperAddGraph'>
     <div className='wrapperInputAddGraph'>
     <Select
    label="-Graph-"
    // options={[{ label: 'Zara'} ]}
    options={normalization(data[0].items)}
    onMenuOpen={getLabels()}
    onChange={handleChipData}
    // type="text"
    // id="title"

    theme={theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: 'green',
        primary: 'blue',
      },
    })}
  />
      {/* <input
        type="text"
        id="title"
        placeholder="-Graph-"
        onChange={handleChipData}
        className = 'inputAddGraph'
      /> */}
      </div>
       <div/>
      <button className='buttonAddGraph' >
      <div className = 'innerButton'>
        <img className ='plusSvg' src ={puls} alt='+' />
      </div>
      </button>
    </form>
  )
   }, [curentLabel]);

   return useMemoAddGraph;
}
  export default AddGraph;