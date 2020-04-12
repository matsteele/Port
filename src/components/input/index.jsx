import React, { useState, useContext } from 'react';
import { store } from '../../store';
import controller from '../controller';
import InputWithBlicker from './caret';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const Input = props => {
  const { state, dispatch } = useContext(store);
  const [choice, setChoice] = useState('');
  const [howleft, sethowleft] = useState(20);
  const [clearList, setclearList] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    '.  .  .   tab to autocomplete'
  );

  const handleChange = e => {
    if (e.target.value) {
      setChoice(e.target.value);
    } else {
      setChoice('');
    }
  };

  const changeView = (_choice) => {
    
    if (Array.isArray(state.context)) {
      if (state.context[1] === _choice) {
        dispatch({ type: 'SET_CONTEXT', payload: state.context[0] });
        document.activeElement.blur();
        setPlaceholder('.  .  .   tab to autocomplete');
        sethowleft(20);
      }
    } else {
      for (const key in controller) {
        if (controller[key][1] === _choice) {
          if (controller[key][2]) {
            dispatch({
              type: 'SET_CONTEXT',
              payload: [key, controller[key][2], controller[key][3]]
            });
            setPlaceholder('type "' + controller[key][2] + '"');
          } else {
              dispatch({
                type: 'SET_CONTEXT',
                payload: key
              });
              setPlaceholder('.  .  .   tab to autocomplete');
            }
          document.activeElement.blur();
          sethowleft(20);
        } else setPlaceholder('.  .  .   tab to autocomplete');
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setChoice('');
    changeView(choice);
  };

  const createDropDown = () => {
    const arrayofListItems = [];
    for (const key in controller) {
      if (controller[key][1].startsWith(choice) || choice.length === 0) {
        arrayofListItems.push(
          <li
            className='bounceOnHover'
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
    return arrayofListItems;
  };

  const arrayofListItems = createDropDown();

  const heightofContainer = !(state.context in controller) ? 200 : 90;

  return (
    <InputContainer height={heightofContainer} className='inputContainer'>
      {props.seq > 2 ? (
        <>
          <div className='listDiv' />

          <AnimatedDivContainer className='formDivContainer'>
            <form className='formDiv' onSubmit={handleSubmit}>
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
            className='listDiv'
            margin='50'
          >
            <ul className='userChoices'>
              {state.context === "mat's terminal" ||
              !Array.isArray(state.context) ||
              clearList
                ? arrayofListItems
                : ''}
            </ul>
          </AnimatedDivContainer>
        </>
      ) : (
        ''
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div(props => ({
  height: props.height,
  transition: 'height 2s ease-out'
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
  height: ${props => props.height};
  transition: height 3s ease-out;
  animation: ${expand} 2s ease;
  animation-fill-mode: forwards;
  margin-left: ${props => props.margin}px;
  animation-direction: ${props => props.direction};
`;

export default Input;
