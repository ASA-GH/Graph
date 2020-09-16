import React from "react"
import './Chip.css'
import DeleteChip from './DeleteChip'


const Chip = ({ chip }) => (
<div className='chip' style={{backgroundColor:chip.color}} >
  <span className='chipText' >{chip.title}</span>
  <DeleteChip chip={chip} />
</div>

)
export default Chip;