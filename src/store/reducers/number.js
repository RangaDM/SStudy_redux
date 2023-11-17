const initialState = {
  number: 0,
  comArray: [],
};

const numberActiontype = {
  INC: "increment",
  DEC: "decrement",
};

export const numberIncrement = (data = 1) => {
  return {
    type: numberActiontype.INC,
    data,
  };
};

export const numberDecrement = (data = 1) => {
  return {
    type: numberActiontype.DEC,
    data,
  };
};

export const reducer = (state = initialState, action) => {
  if (action.type === numberActiontype.INC) {
    return {
      ...state,
      number: state.number + action.data,
    };
  }
  if (action.type === numberActiontype.DEC) {
    return {
      ...state,
      number: state.number - action.data,
    };
  }
  return state;
};
