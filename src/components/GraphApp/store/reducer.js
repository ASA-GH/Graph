
export const reducer = (state, action) => {
  switch (action.type) {   
    case "ADD_CHIP":{
      let array = [...state];
      array.push({
        id: Math.random(),
        title: action.Chip ? action.Chip.title : "",
      })
      return array;
    }
    case "DEL_CHIP":{
      let array = [...state];
      array.splice(array.indexOf(action.Chip), 1);
      return array;
    }
    default:
      return state;
  }
};