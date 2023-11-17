const initialState = {
  number: 0,
};

export const reducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      number: state.number + action.data,
    };
  }
    if (action.type === "decrement") {
        return {
        number: state.number - action.data,
        };
    }
  return state;
};
