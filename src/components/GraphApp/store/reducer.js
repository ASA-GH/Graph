export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CHIP":
      return [
        ...state,
        {
          id: Math.random(), // not really unique but it's just an example
          title: action.Chip.title,
        }
      ];
    default:
      return state;
  }
};