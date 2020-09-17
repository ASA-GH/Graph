import React, { useState, useMemo} from "react"
import Select from "react-select";

import { useDispatch } from 'react-redux'
import './AddGraph.css';
import puls from '../Ikonate/svg/plus.svg';

import {IS_CONTAINS} from '../Constants'
const AddGraph = () => {
 const dispatch = useDispatch()
 const [Chip, setChip] = useState(0)

 const useMemoAddGraph = useMemo(() => {

  let normalization = (data) => {
    let result = [];
    for (const [index, value] of data.entries()) {
      let obj = JSON.parse(value);
      let obj1 = {label: obj.x};
      result.push(obj1);
    }
    return result;
   } 

  const handleChipData = e => {
    setChip({
      ...Chip,
      [e.target.id]: e.target.value,
    })
  }
  const addNewChip = e => {
    e.preventDefault();
    dispatch({ type: IS_CONTAINS, title: Chip.title });
  }
  // const { handleSubmit, register, reset, control } = useForm({ defaultValues });
  const defaultValues = {
    Native: "",
    TextField: "",
    Select: "",
    ReactSelect: { value: "vanilla", label: "Vanilla" },
    Checkbox: false,
    switch: false,
    RadioGroup: "",
    numberFormat: 123456789,
    downShift: "apple"
  };
  return (
    <form onSubmit={addNewChip} className='wrapperAddGraph'>
     <div className='wrapperInputAddGraph'>
     <Select
    label="-Graph-"
    // options={[{ label: 'Zara'} ]}
    options={normalization(labels)}
    // onChange={handleChipData}
    // type="text"
    // id="title"

    theme={theme => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary25: 'green',
        primary: 'blue',
      },
    })}
  />
      {/* <input
        type="text"
        id="title"
        placeholder="-Graph-"
        onChange={handleChipData}
        className = 'inputAddGraph'
      /> */}
      </div>
       <div/>
      <button className='buttonAddGraph' disabled={!Chip.title}>
      <div className = 'innerButton'>
        <img className ='plusSvg' src ={puls} alt='+' />
      </div>
      </button>
    </form>
  )
  }, [Chip.title]);

  return useMemoAddGraph;
}
  export default AddGraph;