import React,{useMemo} from "react";
import Chip from './Chip';
import Card from '../Card/Card'
import './Chip.css'

const Chips = (props) => {
  const { chips, onDeleteChip } = props;

  return useMemo(() => {
    return (
      <Card wrapperChips >
        <Card innerChips >
        { chips &&
            chips.map(chip => (!chip.error ?
              <Chip key={chip.id} chip={chip} onDeleteChip={onDeleteChip}/>
              :
              alert('Error: ' + chip.title)
            ))
          }
        </Card>
      </Card>
    );
  }, [chips]);
};
export default Chips;