import { combineReducers } from 'redux';
import { chipsReducer, dataReducer, labelReducer } from './reducers'

export const reducer = combineReducers({
  chips: chipsReducer,
  data: dataReducer,
  labels: labelReducer,
});

/*
const RemoveErrors = (array) => {
  let result = [];
  for (let obj of array) {
    if (!obj.error)
      result.push(obj);
  }
  return result;
}

const oldReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAW: {
      let obj = {...state};
      for (const [index, value] of action.data.dataset.entries()) {
        action.data.dataset[index]['color'] = obj.labels[index].color;
      }
      obj.data = action.data;
      return obj;
    }
    case ERROR_RESP: {
      let obj = {...state};
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
      return obj;
    }
    default:
      return state;
  }
};
*/