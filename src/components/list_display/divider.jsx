import React, { useContext, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { store } from '../../store';
import controller from '../controller';
import ItemDisplay from './item_display';

const widthOfContainer = 50;

export default function Divider(props) {
  const [hovered, setHovered] = useState([false, '']);
  const [heightOfSpine, setHeightOfSpine] = useState(100);

  const { state } = useContext(store);

  const circleSize = 150; //set by window height
  const circleBuffer = circleSize * 3;
  const base = 400;

  const ifMobile = window.innerWidth < 420 ? true : false;

  // changed direction for animations but it isn't working
  useEffect(() => {
    if (state.context !== "mat's terminal" && !Array.isArray(state.context)) {
      const options = controller[state.context][0];
      const lengthOfLine = 50 + Object.keys(options).length * circleBuffer;
      setHeightOfSpine(Math.max(lengthOfLine, 100));
    }
    else{
      setHeightOfSpine(100);
    }
    
  }, [state.context, circleBuffer]);

  return (
    <SpineContainer className='dividerContainer'>
      <InfoSVG height={heightOfSpine * 1.4} width='100%'>
        <StyledSpine
          className='StyledSpine'
          x1={widthOfContainer / 2}
          y1={0}
          x2={widthOfContainer / 2}
          y2={heightOfSpine}
          h={heightOfSpine}
          opacity={hovered[0] ? 0.05 : 1}
          d={heightOfSpine > 100 ? 100 : 0}
          e={heightOfSpine > 100 ? 0 : 200}
          // direction={state.animDir}
        />

        {!(state.context in controller) ? (
          ''
        ) : ifMobile ? (
          <Disclaimer />
        ) : (
          <ItemDisplay
            circleSize={circleSize}
            circleBuffer={circleBuffer}
            base={base}
            hovered={hovered}
            setHovered={setHovered}
          />
        )}
      </InfoSVG>
    </SpineContainer>
  );
}

const SpineContainer = styled.div({
  alignItems: 'flex-start',
  display: 'flex'
});

const InfoSVG = styled.svg({
  stroke: 'grey',
  overflow: 'visible !important'
});

const draw_in = props => {
  return keyframes`
  0% {
    stroke-dashoffset: ${props.h - props.d};
    stroke: rgb(62, 204, 203);
    stroke-width: 3.5px;
  }
  100% {
    stroke-dashoffset: ${props.e};  
    stroke: gray;
    stroke-width: 4px; 
  }
`;
};

const StyledSpine = styled.line(props => ({
  strokeLinecap: 'round',
  strokeDasharray: props.h,
  strokeDashoffset: props.h,
  animation: `${draw_in(props)} 3s ease forwards`,
  animationDirection: props.direction,
  transition: 'opacity 1.2s ease-in-out'
}));

const Disclaimer = () => (
  <g>
    <rect
      x='10'
      y='400'
      fill='rgb(62, 204, 203)'
      width='300'
      height='150'
      rx='15'
      stroke='none'
    />
    <text
      // text-anchor='middle'
      x='30'
      y='460'
      font-family='Verdana'
      font-size='35'
      fill='white'
      stroke='none'
    >
      not optimized
    </text>
    <text
      // text-anchor='middle'
      x='30'
      y='520'
      font-family='Verdana'
      font-size='35'
      fill='white'
      stroke='none'
    >
      for mobile (yet)
    </text>
  </g>
);
