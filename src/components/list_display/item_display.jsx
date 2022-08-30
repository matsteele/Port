import React, { useContext, useState, useEffect } from "react";
import { store } from "../../store";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import ContentOnHover from "./content_on_hover";
import ItemDetails from "./item_details";
import styleVars from "../../style/style.scss";

export default function ItemDisplay(props) {
  const { state } = useContext(store);
  const [windowLoc, setWindowLoc] = useState(window.screenY);
  const options = state.interact ? {} : state.options;

  const imageMobileOffset = 310;

  const handleScroll = () => {
    setWindowLoc(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const ifMobile = window.innerWidth < styleVars.smlWindowSize ? true : false;

  const findscrollScale = (i) => {
    const scale =
      1 -
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

    return scale > 0 ? scale : 0;
  };

  //probably need to set scrollY based on context/store to have it always adapt

  return (
    <>
      {Object.keys(options).map((optionKey, i) => {
        const option = options[optionKey];
        const scrollScale = findscrollScale(i);
        return (
          <g key={optionKey}>
            <g
              className="opacityTransition"
              key={optionKey}
              opacity={
                props.hovered[0] && props.hovered[1] !== optionKey ? 0.25 : 1
              }
              onMouseEnter={() => props.setHovered([true, optionKey])}
              onMouseLeave={() => props.setHovered([false, ""])}
            >
              <defs>
                <clipPath id={`imgpath_${i}`}>
                  {ifMobile ? (
                    <AnimatedRectangle
                      id={optionKey}
                      secs={i + 2}
                      key={optionKey}
                      x={25}
                      y={
                        props.base - imageMobileOffset + props.circleBuffer * i
                      }
                      width={
                        props.circleSize * scrollScale < 0
                          ? 0
                          : props.circleSize * scrollScale * 2
                      }
                      height={
                        props.circleSize * scrollScale < 0
                          ? 0
                          : props.circleSize * scrollScale
                      }
                    />
                  ) : (
                    <AnimatedCircles
                      id={optionKey}
                      secs={i + 2}
                      key={optionKey}
                      cx={25}
                      cy={props.base + props.circleBuffer * i}
                      originx={25}
                      originy={props.base + props.circleBuffer * i}
                      r={
                        props.circleSize * scrollScale < 0
                          ? 0
                          : props.circleSize * scrollScale
                      }
                      direction={props.direction}
                    />
                  )}
                </clipPath>
              </defs>
              {ifMobile ? (
                <AnimatedRectangle
                  id={optionKey}
                  secs={i + 2}
                  key={optionKey}
                  x={25}
                  y={props.base - imageMobileOffset + props.circleBuffer * i}
                  width={
                    props.circleSize * scrollScale < 0
                      ? 0
                      : props.circleSize * scrollScale * 2
                  }
                  height={
                    props.circleSize * scrollScale < 0
                      ? 0
                      : props.circleSize * scrollScale
                  }
                />
              ) : (
                <AnimatedCircles
                  id={optionKey}
                  secs={i + 2}
                  key={optionKey}
                  cx={ifMobile ? 150 : 25}
                  cy={props.base + props.circleBuffer * i}
                  originx={ifMobile ? 150 : 25}
                  originy={props.base + props.circleBuffer * i}
                  r={
                    props.circleSize * scrollScale < 0
                      ? 0
                      : props.circleSize * scrollScale
                  }
                  delay={2}
                  fill="lightgrey"
                  direction={props.direction}
                />
              )}
              <image
                className="imageProfiled"
                x={ifMobile ? 0 : -props.circleSize}
                y={
                  ifMobile
                    ? props.base - imageMobileOffset + props.circleBuffer * i
                    : props.base - props.circleSize + props.circleBuffer * i
                }
                height={props.circleSize * 2}
                href={option.image}
                opacity={1}
                clipPath={`url(#imgpath_${i})`}
              />
              <AnimatedText
                x={ifMobile ? props.circleSize : -props.circleSize}
                y={
                  ifMobile
                    ? props.base -
                      imageMobileOffset * 1.1 +
                      props.circleBuffer * i
                    : props.base / 2 + 20 + props.circleBuffer * i
                }
                secs={i + 2}
                scale={`scale(${scrollScale},${scrollScale})`}
                opacity={scrollScale}
                textAnchor={"middle"}
                origin={props.base / 2 + 20 + props.circleBuffer * i}
                direction={props.direction}
                fontWeight="bold"
                stroke={"rgb(62, 204, 203)"}
              >
                {optionKey}
              </AnimatedText>
              {(option.link || option.code) && (
                <ContentOnHover
                  circleSize={props.circleSize * scrollScale}
                  circleBuffer={props.circleBuffer}
                  hovered={props.hovered}
                  scrollCircle={props.circleSize * scrollScale}
                  scrollScale={ scrollScale}
                  base={props.base}
                  imageMobileOffset={imageMobileOffset}
                  i={i}
                  optionKey={optionKey}
                />
              )}
            </g>
            <ItemDetails
              {...props}
              scrollScale={scrollScale}
              option={option}
              optionKey={optionKey}
              i={i}
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
    opacity: 0.3;
    stroke: rgb(62, 204, 203);
    }
    95% {
    transform: scale(.5,.5);
    stroke-dashoffset: 300;  
    opacity: .7;
    stroke: gray;
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

export const AnimatedText = styled.text((props) => ({
  transform: props.scale,
  // animation: `${draw_in} ${props.secs}s ease`,
  transformOrigin: `25px ${props.origin}px`,
  fontSize: "25px",
  strokeWidth: "1",
  letterSpacing: "1.5px",
  animationDirection: props.direction,
}));

export const AnimatedCircles = styled.circle((props) => ({
  transform: "scale(1,1)",
  animation: `${draw_in} ${props.secs}s ease`,
  transformOrigin: `${props.originx}px ${props.originy}px`,
  animationDirection: props.direction,
}));

export const AnimatedRectangle = styled.rect((props) => ({
  animationDirection: props.direction,
}));
