export const reducer = (state = [] , action) => {
  switch (action.type) {   
    case "ADD_CHIP":{
      let array = [...state];
      if (action.chip && action.data){
        let chip = {
          id: action.data.id,
          title: action.chip.title,
          data: action.data
        };       
        array.push(chip);
      }
      return array;
    }
    case "DEL_CHIP":{
      let array = [...state];
      array.splice(array.indexOf(action.chip), 1);
      return array;
    }
    default:
      return state;
  }
};