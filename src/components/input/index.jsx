import React, { useState, useContext } from "react";
import { store } from "../../store";
import controller from "../controller";
import InputWithBlicker from "./caret";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import emailjs from "@emailjs/browser";

const Input = (props) => {
  const { state, dispatch } = useContext(store);
  const [choice, setChoice] = useState("");
  const [howleft, sethowleft] = useState(150);
  const [clearList, setclearList] = useState(false);
  const [placeholder, setPlaceholder] = useState("type a selection or click");

  const handleChange = (e) => {
    if (e.target.value) {
      setChoice(e.target.value);
    } else {
      setChoice("");
    }
  };

  const changeView = (input) => {
    const checkForContact = () => {
      const textCheck = controller[state.context].prompt1.default;
      if (input === textCheck) {
        dispatch({ type: "SET_INTERACT", payload: false });
        document.activeElement.blur();
        setPlaceholder("type a selection or click");
        sethowleft(20);
      } else {
        setPlaceholder("try again");
      }
    };

    const checkForMessage = () => {
      // dispatch({ type: "SET_CONTEXT", payload: "message" });
      sendEmail(input);
      setPlaceholder(".  .  .   message sent");
      dispatch({ type: "SET_INTERACT", payload: false });
    };

    const checkForPhotos = () => {
      dispatch({ type: "SET_CONTEXT", payload: `photos-${input}` });
      dispatch({ type: "SET_INTERACT", payload: false });
      setPlaceholder("another age? or ");
    };

    let inputTriggered = false;
    for (const key in controller) {
      if (controller[key].prompt0 === input) {
        if (controller[key].prompt1) {
          setPlaceholder('type "' + controller[key].prompt1.default + '"');
          dispatch({
            type: "SET_INTERACT",
            payload: true,
          });
          dispatch({
            type: "SET_CONTEXT",
            payload: key,
          });
        } else {
          dispatch({
            type: "SET_INTERACT",
            payload: false,
          });
          dispatch({
            type: "SET_CONTEXT",
            payload: key,
          });
          setPlaceholder("type a selection or click");
        }
        document.activeElement.blur();
        sethowleft(20);
        setclearList(true);
        setChoice("");
        inputTriggered = true;
      }
    }
    if (!inputTriggered) {
      if (state.context === "contact") {
        checkForContact();
      } else if (state.context === "message") {
        checkForMessage();
      } else if (state.context === "photos") {
        checkForPhotos();
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
        ((choice.length && controller[key].prompt0.startsWith(choice)) ||
          (!choice.length && state.context === "mat's terminal")) &&
        key !== "mat's terminal"
      ) {
        arrayofListItems.push(
          <li
            className="bounceOnHover"
            value={key}
            id={key}
            key={key}
            onClick={() => changeView(controller[key].prompt0)}
          >
            {controller[key].prompt0}
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
            <ul className="userChoices">{arrayofListItems}</ul>
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

const sendEmail = (message) => {
  var templateParams = {
    message,
  };

  emailjs
    .send(
      "matportfolioanonmail",
      "basicTemplate",
      templateParams,
      "Z_FYYGpXlWpTJ7SIx"
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
};

export default Input;
