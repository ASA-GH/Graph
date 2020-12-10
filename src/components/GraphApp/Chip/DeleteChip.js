import React from "react"
import './Chip.css';
import close from '../Ikonate/svg/close.svg'

const DeleteChip = ({chip, onDeleteChip}) => {
  const DeleteChipAction = e => {
    e.preventDefault()
    onDeleteChip(chip);
  }

  return (
    <span className="chipClose" onClick={DeleteChipAction} >
      <img className='closeSvg' src={close} alt='x' />
    </span>
  )
}

export default DeleteChip;