import React, { useState} from "react"
import { useDispatch } from 'react-redux'
import './AddGraph.css';
import Puls from '../ikonate/svg/plus.svg';

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
    dispatch({ type: "LOAD_CHIP", title: Chip.title });
    console.log("addNewChip");
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