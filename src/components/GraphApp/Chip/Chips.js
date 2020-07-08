import React from "react";
import Chip from './Chip';
import Card from '../Card/Card'
import './Chip.css'
import { useSelector } from 'react-redux'

const Chips = () => {

  const chips = useSelector(state => state)
  return (
    <Card  wrapperChips >
      <Card  innerChips >
       {
       chips.map(chip =>(chip.error ? 
        alert('Error: '+ chip.title)
        :
        <Chip key={chip.id} Chip={chip} />
       ))} 
      </Card>
    </Card>
  );
};

export default Chips;