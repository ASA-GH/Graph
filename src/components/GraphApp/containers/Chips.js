import React from "react";
import Chip from '../Chip/Chip';
import Card from '../Card/Card'
import '../Chip/Chip.css'
import { useSelector } from 'react-redux'

const Chips = () => {

  const chips = useSelector(state => state)
  return (
    <Card  wrapperChips >
      {/* <button className='buttonChips'>+</button>
      <Card  innerChips >*/}
       {
       chips.map(chip => (
        <Chip key={chip.id} Chip={chip} />
      ))} 
      {/*</Card>
      <button className='buttonChips'>-</button>*/}
    </Card>
  );
};

export default Chips;