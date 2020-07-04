export const reducer = (state = [] , action) => {
 console.log(action.type)
  switch (action.type) {   
    case "ADD_CHIP":{
      let array = [...state];
      if (action.chip){
        let chip = {
          id: Math.random(),
          title: action.title,
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