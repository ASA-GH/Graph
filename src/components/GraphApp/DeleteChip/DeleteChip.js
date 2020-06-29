import React, { useState, useContext } from "react"
import './DeleteChip.css';
import  {ChipContext}  from '../context/ChipContext';
import Close from '../ikonate/svg/close.svg'


const DeleteChip = () => {
  const { dispatch } = useContext(ChipContext)
  const [Chip, setChip] = useState()

  const handleChipData = e => {
    setChip({
      ...Chip,
      [e.target.id]: e.target.value,
    })
  }

  const DeleteChipAction = e => {
    e.preventDefault()
    dispatch({ type: "DEL_CHIP", Chip })
  }

  return (
    <span className="chipClose" onClick={DeleteChipAction}>
      <img className ='closeSvg' src ={Close} alt='x'/>
   </span>
    
  )
}
export default DeleteChip;