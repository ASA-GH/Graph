import React, { useState } from "react"
import './Chip.css';
import Close from '../Ikonate/svg/Close.svg'
import { useDispatch } from 'react-redux'
import {DEL_CHIP} from '../Constants'

const DeleteChip = ({chip}) => {
  const dispatch = useDispatch()
  const DeleteChipAction = e => {
    e.preventDefault()
    dispatch({ type: DEL_CHIP, label : chip})
  }
  return (
    <span className="chipClose" onClick={DeleteChipAction} >
      <img className='closeSvg' src={Close} alt='x' />
    </span>
  )
}
export default DeleteChip;