import React from "react"
import './Chip.css';
import close from '../Ikonate/svg/close.svg'
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
      <img className='closeSvg' src={close} alt='x' />
    </span>
  )
}
export default DeleteChip;