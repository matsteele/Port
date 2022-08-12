import React, { useContext, useState } from "react";
import { store } from "../../store";
import controller from "../controller";

import { LinkIcons } from "../controller/organizations";

import { AnimatedCircles } from "./item_display";

export default function ContentOnHover(props) {
  const { state } = useContext(store);
  const options = controller[state.context][0];
  const option = options[props.optionKey];

  const teal = "rgba(62, 204, 203, 0.9)";

  const ifMobile = window.innerWidth < 420 ? true : false;

  return (
    <g key={props.optionKey}>
      {props.hovered[0] && props.hovered[1] === props.optionKey ? (
        <>
          <AnimatedCircles
            cx={ifMobile ? props.circleSize : 25}
            cy={props.base + props.circleBuffer * props.i}
            originx={ifMobile ? props.circleSize : 25}
            originy={props.base + props.circleBuffer * props.i}
            r={ifMobile ? 40 : props.circleSize}
            opacity={!option.link && !option.code ? 0.5 : 0.9}
            fill={teal}
            stroke="white"
            secs={1}
          />
          <path
            d={`M0,${props.circleSize}  100 ,${props.circleSize} `}
            transform={`translate(${ifMobile ? 100 : -25}, ${
              props.base - props.circleSize + props.circleBuffer * props.i
            })`}
            stroke="white"
            strokeLinecap="round"
          />

          {LinkIcons[option.link] ? (
            <a href={option.link}>
              <image
                key={props.optionKey}
                height="50px"
                // x={ifMobile ? props.circleSize : 25}
                y={props.base + props.circleBuffer * props.i - 50}
                href={LinkIcons[option.link]}
              />
              {/* {option.link} */}
            </a>
          ) : option.link ? (
            <a href={option.link}>
              <text
                x={ifMobile ? props.circleSize : 25}
                y={props.base + props.circleBuffer * props.i - 15}
                textAnchor="middle"
                stroke="white"
                className="boldOnHover"
              >
                link
              </text>
            </a>
          ) : (
            " "
          )}

          {option.code ? (
            <a href={option.code}>
              <text
                x={ifMobile ? props.circleSize : 25}
                y={props.base + props.circleBuffer * props.i + 25}
                textAnchor="middle"
                stroke="white"
                className="boldOnHover"
              >
                code
              </text>
            </a>
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
