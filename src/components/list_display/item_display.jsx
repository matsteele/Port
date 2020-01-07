import React, { useContext, useState, useEffect } from 'react';
import { store } from '../../store';
import controller from '../controller';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import ContentOnHover from './content_on_hover';

export default function ItemDisplay(props) {
  const { state } = useContext(store);
  const options = controller[state.context][0];
  const [windowLoc, setWindowLoc] = useState(window.screenY);

  // build in logic that sees if the options have changed,
  // and if so reverses the animation - potentially easier with classes
  // // convert elements to classes and trade out the classes to animate out
  const handleScroll = () => {
    setWindowLoc(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const ifMobile = window.innerWidth < 420 ? true : false;
  const findscrollScale = i => {
    return 1 -
      ((props.circleBuffer * 2) / 3 +
        windowLoc -
        props.circleBuffer * i -
        props.base) /
        props.circleBuffer <
      1
      ? 1 -
          ((props.circleBuffer * 2) / 3 +
            windowLoc -
            props.circleBuffer * i -
            props.base) /
            props.circleBuffer
      : 1 +
          ((props.circleBuffer * 2) / 3 +
            windowLoc -
            props.circleBuffer * i -
            props.base) /
            props.circleBuffer;
  };
  //probably need to set scrollY based on context/store to have it always adapt

  return (
    <>
      {Object.keys(options).map((optionKey, i) => {
        const option = options[optionKey];
        const scrollScale = findscrollScale(i);
        return (
          <g
            className='opacityTransition'
            key={optionKey}
            onMouseEnter={() => props.setHovered([true, optionKey])}
            onMouseLeave={() => props.setHovered([false, ''])}
            opacity={
              props.hovered[0] && props.hovered[1] != optionKey ? 0.25 : 1
            }
          >
            <defs>
              <clipPath id={`imgpath_${i}`}>
                <AnimatedCircles
                  id={optionKey}
                  secs={i + 2}
                  key={optionKey}
                  cx={ifMobile ? 150 : 25}
                  cy={props.base + props.circleBuffer * i}
                  originx={ifMobile ? 150 : 25}
                  originy={props.base + props.circleBuffer * i}
                  r={props.circleSize * scrollScale}
                  direction={props.direction}
                />
              </clipPath>
            </defs>
            <AnimatedCircles
              id={optionKey}
              secs={i + 2}
              key={optionKey}
              cx={ifMobile ? 150 : 25}
              cy={props.base + props.circleBuffer * i}
              originx={ifMobile ? 150 : 25}
              originy={props.base + props.circleBuffer * i}
              r={props.circleSize * scrollScale}
              delay={2}
              fill='none'
              direction={props.direction}
            />
            {console.log(
              props.circleBuffer -
                windowLoc -
                props.circleBuffer * i -
                props.base
            )}
            {console.log(
              1 -
                (props.circleBuffer -
                  windowLoc -
                  props.circleBuffer * i -
                  props.base) /
                  props.circleBuffer
            )}

            <image
              className='imageProfiled'
              x={ifMobile ? 0 : -props.circleSize}
              y={props.base - props.circleSize + props.circleBuffer * i}
              height={props.circleSize * 2}
              href={option.image}
              opacity={ifMobile && props.hovered[0] ? 0.2 : 1}
              clipPath={`url(#imgpath_${i})`}
            />
            <AnimatedText
              x={ifMobile ? props.circleSize : -props.circleSize}
              y={props.base / 2 + 20 + props.circleBuffer * i}
              secs={i + 2}
              scale={`scale(${scrollScale},${scrollScale})`}
              textAnchor={ifMobile ? 'middle' : 'end'}
              origin={props.base / 2 + 20 + props.circleBuffer * i}
              direction={props.direction}
            >
              {optionKey}
            </AnimatedText>
            <ContentOnHover
              circleSize={props.circleSize}
              circleBuffer={props.circleBuffer}
              hovered={props.hovered}
              scrollScale={props.circleSize * scrollScale}
              base={props.base}
              i={i}
              optionKey={optionKey}
            />
          </g>
        );
      })}
    </>
  );
}

const draw_in = keyframes`
    0% {
    transform: scale(0,0);
    stroke-dashoffset: 300;
    opacity: 0;
    stroke: rgb(62, 204, 203);
    }
    10% {
    transform: scale(0.1,0.1);
    stroke-dashoffset: 300;
    opacity: 0;
    stroke: rgb(62, 204, 203);
    }
    95% {
    transform: scale(1,1);
    stroke-dashoffset: 300;  
    opacity: 1;
    stroke: gray;
    }
    100% {
    stroke-dashoffset: 300;  
    opacity: 1;
    stroke: gray;
    }
`;

const AnimatedText = styled.text(props => ({
  transform: props.scale,
  animation: `${draw_in} ${props.secs}s ease`,
  // animationDelay: '2s',
  transformOrigin: `25px ${props.origin}px`,
  // textAnchor: 'end',
  fontSize: '25px',
  strokeWidth: '1',
  letterSpacing: '1.5px',
  animationDirection: props.direction
}));

export const AnimatedCircles = styled.circle(props => ({
  transform: 'scale(1,1)',
  animation: `${draw_in} ${props.secs}s ease`,
  animationDelay: `${props.delay}`,
  transformOrigin: `${props.originx}px ${props.originy}px`,
  animationDirection: props.direction
}));
