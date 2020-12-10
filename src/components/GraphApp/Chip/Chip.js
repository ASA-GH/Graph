import React from "react"
import './Chip.css'
import DeleteChip from './DeleteChip'

const Chip = ({ chip, onDeleteChip }) => (
  <div className='chip' style={{backgroundColor:chip.color}} >
    <span className='chipText' >{chip.title}</span>
    <DeleteChip chip={chip} onDeleteChip={onDeleteChip} />
  </div>
)

export default Chip;