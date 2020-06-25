import React from "react"
import './Chip.css'
import Close from '../ikonate/svg/close.svg'



const Chip = ({ Chip }) => (
<div className='chip' >
  <span className="chipText">{Chip.title}</span>
  <span className="chipClose" /*onClick={onCloseClickAction}*/>
      <img className ='closeSvg' src ={Close} alt='x'/>
  </span>
    
</div>

)
export default Chip;