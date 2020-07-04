import React, { useState } from "react"
import './DeleteChip.css';
import Close from '../ikonate/svg/close.svg'
import { useDispatch } from 'react-redux'


const DeleteChip = () => {
  const dispatch = useDispatch()
  const [Chip] = useState()

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