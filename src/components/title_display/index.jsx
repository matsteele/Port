import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const Display = props => {
  const { state } = useContext(store);
  
  return (
    <TitleContainer>
      {props.seq > 0 ? <AnimatedText> {Array.isArray(state.context)? state.context[0]: state.context} </AnimatedText> : ""}
    </TitleContainer>
  );
};

// style div component and turn this function into a hook
const TitleContainer = styled.div({
  display: "flex",
  height: 150,
  alignItems: "center",
  justifyContent: "center",
  fontSize: "50px",
  letterSpacing: "12px",
  fontWeight: "bold",
  color: "black"
});

const expand = keyframes`
  0% {
    color: rgb(62, 204, 203);
    transform: scale(0.1,0.1) translateY(1710px);
  }
  50% {
    color: rgb(62, 204, 203);
    transform: scale(.2,.2) translateY(110px);
  }
  100% {
    color: grey;
    opacity: .75;
    transform: scale(1, 1) translateY(10px);
  }
`;

const AnimatedText = styled.p`
  transform: translateY(-200px);
  animation: ${expand} 2s ease;
  animation-fill-mode: forwards;
`;

export default Display;
