import React, { useState, useContext } from "react"
import './AddGraph.css';
import  {ChipContext}  from '../context/ChipContext';
import Puls from '../ikonate/svg/plus.svg';

const AddGraph = () => {
  const { dispatch } = useContext(ChipContext)
  const [Chip, setChip] = useState()

  const handleChipData = e => {
    setChip({
      ...Chip,
      [e.target.id]: e.target.value,
    })
  }

  const addNewChip = e => {
    e.preventDefault()
    dispatch({ type: "ADD_CHIP", Chip })
  }

  return (
    <form onSubmit={addNewChip} className='wrapperAddGraph'>
     <div className='wrapperInputAddGraph'>
      <input
        type="text"
        id="title"
        placeholder="   -Graph-"
        onChange={handleChipData}
        className = 'inputAddGraph'
      />
      </div>
       <div/>
      <button className='buttonAddGraph'>
        <img className ='plusSvg' src ={Puls} alt='+'/>
      </button>
    </form>
  )
}
export default AddGraph;