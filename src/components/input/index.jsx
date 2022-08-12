import React, { useState, useContext } from "react";
import { store } from "../../store";
import controller from "../controller";
import InputWithBlicker from "./caret";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import emailjs from '@emailjs/browser';

const Input = (props) => {
  const { state, dispatch } = useContext(store);
  const [choice, setChoice] = useState("");
  const [howleft, sethowleft] = useState(20);
  const [clearList, setclearList] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    ".  .  .   tab to autocomplete"
  );

  const handleChange = (e) => {
    if (e.target.value) {
      setChoice(e.target.value);
    } else {
      setChoice("");
    }
  };

  const changeView = (input) => {
    if (Array.isArray(state.context)) {
      if (state.context[1] === input) {
        // check for contact 
        dispatch({ type: "SET_CONTEXT", payload: state.context[0] });
        document.activeElement.blur();
        setPlaceholder(".  .  .   tab to autocomplete");
        sethowleft(20);
      }
      else if (state.context[0] ===  'message' ){
        // check for sending message 
        // dispatch({ type: "SET_CONTEXT", payload: 'message' }); 
        sendEmail(input)
        setPlaceholder(".  .  .   message sent");
      }
      else if (state.context[0] ===  'photos' ){
        // check for photos
        dispatch({ type: "SET_CONTEXT", payload: 'photos' });        
        setPlaceholder("another age");
      }
    } else {
      for (const key in controller) {
        if (controller[key][1] === input) {
          if (controller[key][2]) {
            setPlaceholder('type "' + controller[key][2] + '"');
            dispatch({
              type: "SET_CONTEXT",
              payload: [key, controller[key][2], controller[key][3]],
            });

          } else {
            dispatch({
              type: "SET_CONTEXT",
              payload: key,
            });
            setPlaceholder(".  .  .   tab to autocomplete");
          }
          document.activeElement.blur();
          sethowleft(20);
        } 
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChoice("");
    changeView(choice);
  };

  const createDropDown = () => {
    const arrayofListItems = [];

    for (const key in controller) {
      if (
        ((choice.length && controller[key][1].startsWith(choice)) ||
          state.context === "mat's terminal") &&
        key !== "mat's terminal"
      ) {
        arrayofListItems.push(
          <li
            className="bounceOnHover"
            value={key}
            id={key}
            key={key}
            onClick={() => changeView(controller[key][1])}
          >
            {controller[key][1]}
          </li>
        );
      }
    }
    if (!choice.length && state.context !== "mat's terminal") {
      const key = "mat's terminal";
      arrayofListItems.push(
        <li
          className="bounceOnHover"
          value={key}
          id={key}
          key={key}
          onClick={() => changeView("back to main menu")}
        >
          {"back to main menu"}
        </li>
      );
    }

    return arrayofListItems;
  };

  const arrayofListItems = createDropDown();

  const heightofContainer = !(state.context in controller) ? 200 : 90;

  return (
    <InputContainer height={heightofContainer} className="inputContainer">
      {props.seq > 2 ? (
        <>
          <div className="listDiv" />

          <AnimatedDivContainer className="formDivContainer">
            <form className="formDiv" onSubmit={handleSubmit}>
              <InputWithBlicker
                firstOption={arrayofListItems[0]}
                handleChange={handleChange}
                choice={choice}
                setChoice={setChoice}
                sethowleft={sethowleft}
                howleft={howleft}
                setclearList={setclearList}
                placeholder={placeholder}
              />
            </form>
          </AnimatedDivContainer>

          <AnimatedDivContainer
            height={heightofContainer / 3}
            className="listDiv"
            margin="50"
          >
            <ul className="userChoices">
              {state.context === "mat's terminal" ||
              !Array.isArray(state.context) ||
              clearList
                ? arrayofListItems
                : ""}
            </ul>
          </AnimatedDivContainer>
        </>
      ) : (
        ""
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div((props) => ({
  height: props.height,
  transition: "height 2s ease-out",
}));

const expand = keyframes`
  0% {
    opacity: 0.05;
    transform:  translateX(-30px) ;
  }
  100% {
    opacity: 1;
    transform:  translateX(0px);
  }
`;

const AnimatedDivContainer = styled.div`
  height: ${(props) => props.height};
  transition: height 3s ease-out;
  animation: ${expand} 2s ease;
  animation-fill-mode: forwards;
  margin-left: ${(props) => props.margin}px;
  animation-direction: ${(props) => props.direction};
`;



const sendEmail = (message) =>{

  var templateParams = {
    message
  };
  
  emailjs.send('matportfolioanonmail', 'basicTemplate', templateParams, 'Z_FYYGpXlWpTJ7SIx')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  

}



export default Input;
