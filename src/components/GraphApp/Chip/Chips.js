import React,{useMemo} from "react";
import Chip from './Chip';
import Card from '../Card/Card'
import './Chip.css'
import { useSelector } from 'react-redux'

const Chips = () => {
  const chips = useSelector(state => state)
  const useMemoChips = useMemo(() => {
  return (
    <Card wrapperChips >
      <Card innerChips >
        {
          chips[0].labels.map(chip => (!chip.error ?
            <Chip key={chip.id} chip={chip} />
            :
            alert('Error: ' + chip.title)
          ))
        }
      </Card>
    </Card>
  );
}, [chips[0].labels]);
return useMemoChips;
};
export default Chips;