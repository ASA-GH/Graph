import React, { useContext } from "react";
import { ChipContext } from "../context/ChipContext";
import Chip from '../Chip/Chip';
import Card from '../Card/Card'
import '../Chip/Chip.css'
const Chips = () => {
  const { chips } = useContext(ChipContext);
  return (
    <Card  wrapperChips >
     {/* <button className='buttonChips'>+</button>
      <Card  innerChips >*/}
      {chips.map(chip => (
        <Chip key={chip.id} Chip={chip} />
      ))}
      {/*</Card>
      <button className='buttonChips'>-</button>*/}
    </Card>
  );
};

export default Chips;