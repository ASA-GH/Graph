import GetColor from './RandomColor'
import {ERROR_RESP, DEL_CHIP, ADD_CHIP} from '../Constants'
const RemoveErrors = (array) => {
  let result = [];
  for (let obj of array) {
    if (!obj.error)
      result.push(obj);
  }
  return result;
}
export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CHIP: {
      let array = [...state];
      array = RemoveErrors(array);
      let chip = {
        id: Math.random(),
        title: action.title,
        data: action.data,
        color: GetColor(),
        error: false
      };
      array.push(chip);
      return array;
    }
    case DEL_CHIP: {
      let array = [...state];
      array = RemoveErrors(array);
      array.splice(array.indexOf(action.chip), 1);
      return array;
    }
    case ERROR_RESP: {
      let array = [...state];
      let chip = {
        id: Math.random(),
        title: action.title,
        data: action.data,
        color: GetColor(),
        error: true
      };
      array.push(chip);
      return array;
    }
    default:
      return state;
  }
};