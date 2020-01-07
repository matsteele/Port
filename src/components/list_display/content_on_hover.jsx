import React, { useContext, useEffect, useState } from 'react';
import { store } from '../../store';
import controller from '../controller';
import LibraryIcons from '../controller/library_icons';
import { OrgIcons } from '../controller/organizations';
import { AnimatedCircles } from './item_display';

export default function ContentOnHover(props) {
  const { state } = useContext(store);
  const options = controller[state.context][0];
  const option = options[props.optionKey];

  const ifMobile = window.innerWidth < 420 ? true : false;
  const leftBufferFromCircle = ifMobile? 0 : props.circleSize * 1.25;


  const createDescription = () => {
    const wordsAsArray = option.descr.split(' ');
    const descrWordCount = wordsAsArray.length;
    const numberOfLines = Math.round(descrWordCount / 8);
    const ArrayOfLines = [];

    for (let i = 0; i <= numberOfLines - 1; i++) {
      const arrayOfLine = wordsAsArray.slice(i * 8, i * 8 + 8);
      const lineStr = arrayOfLine.join(' ');
      ArrayOfLines.push(
        <>
          <br />
          <tspan
            x={leftBufferFromCircle + 20}
            y={
              props.base +
              props.circleSize / 1.75 +
              props.circleBuffer * props.i +
              25 +
              i * 20
            }
          >
            {lineStr}
          </tspan>
        </>
      );
    }
    return ArrayOfLines;
  };

  const ArrayOfLines = createDescription();


  return (
    <g key={props.optionKey}>
      {props.hovered[0] && props.hovered[1] === props.optionKey ? (
        <>
          <AnimatedCircles
            cx={ifMobile ? props.circleSize : 25}
            cy={props.base + props.circleBuffer * props.i}
            originx={ifMobile ? props.circleSize : 25}
            originy={props.base + props.circleBuffer * props.i}
            r={ifMobile ? 40 : props.circleWidth}
            opacity={!option.link && !option.code ? 0.5 : 0.9}
            fill='rgba(62, 204, 203, 0.9)'
            stroke='white'
            originx={ifMobile ? props.circleSize : 25}
            originy={props.base + props.circleBuffer * props.i}
            secs={1}
            direction={props.hovered[0] ? 'initial' : 'reverse'}
          />

          <path
            d={`M0,${props.circleSize}  100 ,${props.circleSize} `}
            transform={`translate(${ifMobile ? 100 : -25}, ${props.base -
              props.circleSize +
              props.circleBuffer * props.i})`}
            stroke='white'
            strokeLinecap='round'
          />

          {option.link ? (
            <a href={option.link}>
              <text
                x={ifMobile ? props.circleSize : 25}
                y={props.base + props.circleBuffer * props.i - 15}
                transformOrigin={`${
                  ifMobile ? props.circleSize : 25
                } ${props.base + props.circleBuffer * props.i - 15}px`}
                textAnchor='middle'
                stroke='white'
                className='boldOnHover'
              >
                link
              </text>
            </a>
          ) : (
            ' '
          )}

          {option.code ? (
            <a href={option.code}>
              <text
                x={ifMobile ? props.circleSize : 25}
                y={props.base + props.circleBuffer * props.i + 25}
                transformOrigin={`25px ${props.base +
                  props.circleBuffer * props.i -
                  15}px`}
                textAnchor='middle'
                stroke='white'
                className='boldOnHover'
              >
                code
              </text>
            </a>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
      <g
        className='opacityTransition'
        key={props.optionKey}
        opacity={
          props.hovered[0] && props.hovered[1] === props.optionKey ? 1 : 0
        }
      >
        {OrgIcons[option.sub_title] ? (
          <image
            height='50px'
            x={leftBufferFromCircle}
            y={
              props.base +
              props.circleSize / 1.75 +
              props.circleBuffer * props.i -
              50
            }
            href={OrgIcons[option.sub_title]}
          />
        ) : (
          ''
        )}

        <text
          x={
            OrgIcons[option.sub_title]
              ? leftBufferFromCircle + 60
              : leftBufferFromCircle
          }
          y={
            props.base +
            props.circleSize / 1.75 +
            props.circleBuffer * props.i -
            15
          }
          fontWeight='bold'
        >
          {option.sub_title}
        </text>
        <text
          inline-size='150'
          x={leftBufferFromCircle + 20}
          y={
            props.base +
            props.circleSize / 1.75 +
            props.circleBuffer * props.i +
            25
          }
          fontSize='12'
          opacity='.75'
          width={150}
        >
          {ArrayOfLines.map(line => line)}
        </text>
        {option.lower_icons ? (
          <g>
            <text
              x={leftBufferFromCircle}
              y={
                props.base +
                props.circleSize / 1.75 +
                props.circleBuffer * props.i +
                ArrayOfLines.length * 18.75 +
                60
              }
              fontSize='15px'
            >
              tools used
            </text>
            {option.lower_icons.map((icon, j) => (
              <image
                height='25px'
                x={leftBufferFromCircle + j * 50}
                y={
                  props.base +
                  props.circleSize / 1.75 +
                  props.circleBuffer * props.i +
                  ArrayOfLines.length * 18.75 +
                  75
                }
                href={LibraryIcons[icon]}
              />
            ))}
          </g>
        ) : (
          ''
        )}
      </g>
    </g>
  );
}
