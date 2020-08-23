import React, { useState} from "react"
import { useDispatch } from 'react-redux'
import './AddGraph.css';
import Puls from '../Ikonate/svg/Plus.svg';
import {IS_CONTAINS} from '../Constants'

const AddGraph = () => {
  const dispatch = useDispatch()
  const [Chip, setChip] = useState(0)
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
        <img className ='plusSvg' src ={Puls} alt='+' />
      </button>
    </form>
  )
}
export default AddGraph;