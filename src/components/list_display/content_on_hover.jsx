import React, { useContext, useState } from "react";
import { store } from "../../store";
import styleVars from "../../style/style.scss";

import { LinkIcons } from "../controller/organizations";

import {
  AnimatedCircles,
  AnimatedRectangle,
  AnimatedText,
} from "./item_display";

export default function ContentOnHover(props) {
  const { state } = useContext(store);
  const options = state.options;

  const option = options[props.optionKey];

  const teal = "rgba(62, 204, 203, 0.9)";

  const ifMobile = window.innerWidth < styleVars.smlWindowSize ? true : false;

  return (
    <g key={props.optionKey}>
      {props.hovered[0] && props.hovered[1] === props.optionKey ? (
        <>
          {ifMobile ? (
            <AnimatedRectangle
              id={props.optionKey}
              secs={1}
              key={props.optionKey}
              x={25}
              y={
                props.base -
                props.imageMobileOffset +
                props.circleBuffer * props.i
              }
              width={props.circleSize * 2}
              height={props.circleSize}
              opacity={!option.link && !option.code ? 0.5 : 0.9}
              fill={teal}
              stroke="white"
            />
          ) : (
            <AnimatedCircles
              cx={25}
              cy={props.base + props.circleBuffer * props.i}
              originx={25}
              originy={props.base + props.circleBuffer * props.i}
              r={props.circleSize}
              opacity={!option.link && !option.code ? 0.5 : 0.9}
              fill={teal}
              stroke="white"
              secs={1}
            />
          )}
          {!ifMobile && (
            <path
              d={`M0,${props.circleSize}  100 ,${props.circleSize} `}
              transform={`translate(${-25}, ${
                props.base - props.circleSize + props.circleBuffer * props.i
              })`}
              stroke="white"
              strokeLinecap="round"
            />
          )}
          {LinkIcons[option.link] ? (
            <a href={option.link}>
              <image
                key={props.optionKey}
                height="50px"
                x={ifMobile? 50: 0}
                y={
                  ifMobile
                    ? props.base -
                      props.imageMobileOffset * 1.1 +
                      props.circleBuffer * props.i +
                      60
                    : props.base + props.circleBuffer * props.i - 50
                }
                href={LinkIcons[option.link]}
              />
            </a>
          ) : option.link ? (
            ifMobile ? (
              <a href={option.link}>
                <AnimatedText
                  x={100}
                  y={
                    props.base -
                    props.imageMobileOffset * 1.1 +
                    props.circleBuffer * props.i +
                    115
                  }
                  secs={props.i + 2}
                  scale={`scale(${props.scrollScale},${props.scrollScale})`}
                  opacity={props.scrollScale}
                  textAnchor={"middle"}
                  origin={props.base / 2 + 20 + props.circleBuffer * props.i}
                  direction={props.direction}
                  fontWeight="bold"
                  stroke={"white"}
                >
                  link
                </AnimatedText>
              </a>
            ) : (
              <a href={option.link}>
                <text
                  x={25}
                  y={props.base + props.circleBuffer * props.i - 15}
                  textAnchor="middle"
                  stroke="white"
                  className="boldOnHover"
                >
                  link
                </text>
              </a>
            )
          ) : (
            " "
          )}
          {option.code ? (
            ifMobile ? (
              <a href={option.link}>
                <AnimatedText
                  x={200}
                  y={
                    props.base -
                    props.imageMobileOffset * 1.1 +
                    props.circleBuffer * props.i +
                    115
                  }
                  secs={props.i + 2}
                  scale={`scale(${props.scrollScale},${props.scrollScale})`}
                  opacity={props.scrollScale}
                  textAnchor={"middle"}
                  origin={props.base / 2 + 20 + props.circleBuffer * props.i}
                  direction={props.direction}
                  fontWeight="bold"
                  stroke={"white"}
                >
                  code
                </AnimatedText>
              </a>
            ) : (
              <a href={option.code}>
                <text
                  x={ifMobile ? 60 : 25}
                  y={ props.base + props.circleBuffer * props.i + 25
                  }
                  textAnchor="middle"
                  stroke="white"
                  className="boldOnHover"
                >
                  code
                </text>
              </a>
            )
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </g>
  );
}
