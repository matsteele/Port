import React from "react";
import controller from "./components/controller";
import _ from "lodash";

const initialState = {
  context: "mat's terminal",
  options: controller["mat's terminal"].options,
  animDir: "initial",
  interact: false,
  scroll: 0,
};

export const store = React.createContext(initialState);

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INTERACT":
      return {
        ...state,
        interact: action.payload,
      };

    case "SET_CONTEXT":
      let context = action.payload.split("-")[0]

      // accounts for filtering (age)

      let filterVal =
        action.payload.split("-")[1] && action.payload.split("-")[1].length
          ? action.payload.split("-")[1]
          : "";

      let options = controller[context].options;

      if (filterVal.length) {
        options = _.pickBy(options, function (value, key) {
          return value.sub_title === filterVal;
        });
      }

      return {
        ...state,
        context: context,
        options: options,
      };
    case "SET_ANIM_DIR":
      return {
        ...state,
        animDir: action.payload,
      };
    case "SET_SCROLL":
      return {
        ...state,
        scroll: action.payload,
      };
    case "RESET_STORE":
      return initialState;
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <store.Provider value={{ state, dispatch }}>
      {props.children}
    </store.Provider>
  );
};
