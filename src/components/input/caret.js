import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";

export default function InputWithCaret(props) {
  const inputRef = useRef();
  const [intervalBool, setintervalBool] = useState(true);

  const handleKeyUp = e => {
    const caretIndex = e.target.selectionStart;
    props.sethowleft(20 + caretIndex * 7);
    props.setclearList(false);
  };

  const handleKeyDown = e => {
    if (e.key === "Tab") {
      e.preventDefault();
      props.setChoice(props.firstOption.props.children);
    }
    if (e.key === "Escape") {
      e.preventDefault();
      props.setChoice("");
      props.setclearList(true)
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    const resetid = setInterval(() => {
      setintervalBool(intervalBool ? false : true);
    }, 800);
    return () => clearInterval(resetid);
  }, [intervalBool]);

  return (
    <InputContainer>
      <RelativeInput
        id="term_input"
        name="inputData"
        ref={inputRef}
        autoFocus
        type="text"
        onKeyUp={handleKeyUp}
        value={props.choice}
        onKeyDown={handleKeyDown}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
      {document.activeElement.id =="term_input" ? (
        <ShiftingBlinker left={props.howleft} height="40" width="10">
          <line
            x1={0}
            y1={5}
            x2={0}
            y2={30}
            stroke="rgb(62, 204, 203)"
            opacity={intervalBool ? 1 : 0}
          />
        </ShiftingBlinker>
      ) : (
        ""
      )}
    </InputContainer>
  );
}

const InputContainer = styled.div({
  height: 40,
});

const ShiftingBlinker = styled.svg(props => ({
  left: props.left,
  position: "absolute",
  stroke: "grey",
  strokeWidth: 10,
  strokeLinecap: "round"
}));

const RelativeInput = styled.input({
  caretColor: "transparent",
  height: 40,
  border: "10px rgba(34, 36, 38, 0.15)",
  fontSize: "15px",
  color: "rgb(62, 204, 203)",
  position: "absolute",
  "&::placeholder": {
    opacity: 0.25,
    fontSize: "15px"
  }
});
