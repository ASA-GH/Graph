import GetColor from './RandomColor'
import {ERROR_RESP, DEL_CHIP, ADD_CHIP, DRAW, GET_LABELS, CURENT_LABEL} from '../Constants'

const RemoveErrors = (array) => {
  let result = [];
  for (let obj of array) {
    if (!obj.error)
      result.push(obj);
  }
  return result;
}
export const reducer = (state = [{labels:[], data:{scale:[], dataset:[]}, items:[], curentLabel:''}], action) => {
  switch (action.type) {
    case ADD_CHIP: {
      let array = [...state];
      let obj = array[0];
      let labels = RemoveErrors(obj.labels);
      let chip = {
        id: Math.random(),
        title: action.title,
        color: GetColor(),
        error: false
      };
      labels.push(chip);
      obj.labels = labels;
      array[0] = obj;
      return array;
    }
    case GET_LABELS: {
      let array = [...state];
      let obj = array[0];
      obj.items = action.labels;
      array[0] = obj;
      return array;
    }
    case CURENT_LABEL: {
      let array = [...state];
      let obj = array[0];
      obj.curentLabel = action.label;
      array[0] = obj;
      return array;
    }
    case DEL_CHIP: {
      let array = [...state];
      let obj = array[0];
      let labels = obj.labels;
      labels.splice(labels.indexOf(action.label), 1);
      obj.labels = RemoveErrors(labels);
      array[0] = obj;
      return array;
    }
    case DRAW: {
      let array = [...state];
      let obj = array[0];
      console.log(action.data)
      for (const [index, value] of action.data.dataset.entries()) {
        action.data.dataset[index]['color'] = obj.labels[index].color;
      }
      obj.data = action.data;
      array[0] = obj;
      return array;
    }
    case 'ERROR': {
    let array = [...state];

console.log(action.e)

    return array;
    }
    case ERROR_RESP: {
      let array = [...state];
      let obj = array[0];
      let labels = RemoveErrors(obj.labels);
      let chip = {
        id: Math.random(),
        title: action.title,
        data: action.data,
        color: GetColor(),
        error: true
      };
      labels.push(chip);
      obj.labels = labels;
      array[0] = obj;
      return array;
    }
    default:
      return state;
  }
};