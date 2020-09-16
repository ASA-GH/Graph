import React, { useState, useMemo} from "react"
import { useDispatch } from 'react-redux'
import './AddGraph.css';
import puls from '../Ikonate/svg/plus.svg';

import {IS_CONTAINS} from '../Constants'
const AddGraph = () => {
 const dispatch = useDispatch()
 const [Chip, setChip] = useState(0)

 const useMemoAddGraph = useMemo(() => {

  const handleChipData = e => {
    setChip({
      ...Chip,
      [e.target.id]: e.target.value,
    })
  }
  const addNewChip = e => {
    e.preventDefault();
    dispatch({ type: IS_CONTAINS, title: Chip.title });
  }
  
  return (
    <form onSubmit={addNewChip} className='wrapperAddGraph'>
     <div className='wrapperInputAddGraph'>
      <input
        type="text"
        id="title"
        placeholder="-Graph-"
        onChange={handleChipData}
        className = 'inputAddGraph'
      />
      </div>
       <div/>
      <button className='buttonAddGraph' disabled={!Chip.title}>
      <div className = 'innerButton'>
        <img className ='plusSvg' src ={puls} alt='+' />
      </div>
      </button>
    </form>
  )
  }, [Chip.title]);

  return useMemoAddGraph;
}
  export default AddGraph;