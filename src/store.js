import React from "react";

const initialState = {
  context: "mat's li'l terminal",
  animDir: 'initial',
  scroll: 0
};

export const store = React.createContext(initialState);

export const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_CONTEXT':
      return {
        ...state,
        context: action.payload
      };
    case 'SET_ANIM_DIR':
      return {
        ...state,
        animDir: action.payload
      };
    case 'SET_SCROLL':
      return {
        ...state,
        scroll: action.payload
      };
    case 'RESET_STORE':
      return initialState;
    default:
      return state;
  }
};

export const StoreProvider = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <store.Provider value={{ state, dispatch }}>
      {props.children}
    </store.Provider>
  );
};
