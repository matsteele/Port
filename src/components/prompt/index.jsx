import React, { useContext } from "react";
import styled from "@emotion/styled";
import { store } from "../../store";
import { keyframes } from "@emotion/core";

export default function Prompt(props) {
  const { state } = useContext(store);
  let promptTextToDisplay = "";
  console.log(state, "statePrompt");

  if(Array.isArray(state.context)){
    promptTextToDisplay = state.context[2]
  }
  else if (state.context.startsWith("mat")) {
    promptTextToDisplay = "what would you like to see?";
  }
  else {
    promptTextToDisplay = "what else would you like to see?";
  }

  return (
    <div className="promptText">
      {props.seq > 1 ? (
        <AnimatedText> {promptTextToDisplay} </AnimatedText>
      ) : (
        ""
      )}
    </div>
  );
}

const expand = keyframes`
  0% {
    color: rgb(62, 204, 203);
    transform: translateX(120px) scale(.1,.1) ;
  }
  100% {
    color: grey;
    opacity: .9;
    transform: scale(1, 1) translateX(-1px);
  }
`;

const AnimatedText = styled.p`
  animation: ${expand} 2s ease;
  animation-fill-mode: forwards;
`;
