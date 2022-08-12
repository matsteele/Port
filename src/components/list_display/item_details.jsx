import React, { useContext, useState, useEffect } from "react";
import LibraryIcons from "../controller/library_icons";
import { OrgIcons } from "../controller/organizations";
import { store } from "../../store";

export default function ItemDetails(props) {
  const [iconName, setifIconHover] = useState("");
  const ifMobile = window.innerWidth < 420 ? true : false;
  const leftBufferFromCircle = ifMobile ? 0 : props.circleSize * 1.6;
  const textUpFrontCenter = props.circleSize + 50;
  const { state } = useContext(store);
  const teal = "rgba(62, 204, 203, 0.9)";
  let totalLineCount = 0

  const ArrayOfTextLines = () => {
    // const description = props.option.descr.forEach((char, i)=> )

    const wordsAsArray = props.option.descr.split(" ");
    const wordsWithChars = wordsAsArray.map((word) => [word, word.length]);
    // [('word', 4), 'four', 4]
    // push until count reached

    const lineCharLength = 60;

    // const descrWordCount = wordsAsArray.length;
    // const numberOfLines = 0; //Math.round(descrWordCount / 10) + 1;
    // const ArrayOfLines = [];
    let lineCount = 0;
    let charCount = 0;
    let lineOfWords = [];
    let ArrayOfLines = [];
    // console.log(props.circleSize, props.scrollScale)
    wordsWithChars.forEach((wrds, i) => {
      if (charCount > lineCharLength || i === wordsWithChars.length - 1) {
        const lineSentence = lineOfWords.join(" ");
        const lineSpan = (
          <tspan
            x={leftBufferFromCircle + 20}
            key={i}
            y={
              props.base +
              props.circleSize / 1.75 +
              props.circleBuffer * props.i +
              25 +
              lineCount * 20 -
              textUpFrontCenter
            }
          >
            {lineSentence}
          </tspan>
        );

        ArrayOfLines.push(lineSpan);
        lineOfWords = [];
        lineCount += 1;
        totalLineCount += 1
        charCount = 0;
      }
      lineOfWords.push(wrds[0]);
      charCount += wrds[1];
    });

    return ArrayOfLines
  };

  const ArrayOfLines  = ArrayOfTextLines()

  return (
    <g
      key={props.optionKey + "item"}
      className="opacityTransition"
      // display={
      //   props.hovered[0] && props.hovered[1] === props.optionKey
      //     ? "flex"
      //     : "None"
      // }
      opacity={
        props.scrollScale // props.hovered[0] && props.hovered[1] === props.optionKey ? 1 : 0
      }
    >
      <foreignObject
        id="G"
        width={window.innerWidth / 2}
        height={"350"}
        x={leftBufferFromCircle - 50}
        y={
          props.base +
          props.circleSize / 1.75 +
          props.circleBuffer * props.i -
          textUpFrontCenter -
          50
        }
      />
      {/* <div height={props.circleSize * 2} width={props.circleSize * 2} color='red' /> */}
      {OrgIcons[props.option.sub_title] ? (
        <image
          key={props.optionKey}
          height="50px"
          x={leftBufferFromCircle}
          y={
            props.base +
            props.circleSize / 1.75 +
            props.circleBuffer * props.i -
            textUpFrontCenter -
            50
          }
          href={OrgIcons[props.option.sub_title]}
        />
      ) : (
        ""
      )}

      <text
        x={
          OrgIcons[props.option.sub_title]
            ? leftBufferFromCircle + 60
            : leftBufferFromCircle
        }
        y={
          props.base +
          props.circleSize / 1.75 +
          props.circleBuffer * props.i -
          15 -
          textUpFrontCenter
        }
        fontWeight="bold"
      >
        {props.option.sub_title && state.context === "dashboards" ? (
          <tspan fontSize="8" stroke="#9e9e9e75">
            built for --
          </tspan>
        ) : (
          ""
        )}
        {props.option.logo_only ? "" : props.option.sub_title}
      </text>

      <text
        inline-size="150"
        x={leftBufferFromCircle + 20}
        y={
          props.base +
          props.circleSize / 1.75 +
          props.circleBuffer * props.i +
          25 -
          textUpFrontCenter
        }
        fontSize="12"
        opacity=".75"
        width={150}
      >
        {ArrayOfLines.map((line) => line)}
      </text>
      {props.option.lower_icons ? (
        <g>
          <text
            x={leftBufferFromCircle}
            y={
              props.base +
              props.circleSize / 1.75 +
              props.circleBuffer * props.i +
              ArrayOfLines.length * 18.75 +
              60 -
              textUpFrontCenter
            }
            fontSize="15px"
          >
            tools used: --
            <tspan stroke={teal} fontWeight="bold">
              {iconName}
            </tspan>
          </text>
          {props.option.lower_icons.map((icon, j) => {
            let row = j % 6;
            let col = Math.floor(j / 6);
            return (
              <image
                key={icon}
                height="25px"
                x={leftBufferFromCircle + row * 50}
                y={
                  props.base +
                  props.circleSize / 1.75 +
                  props.circleBuffer * props.i +
                  ArrayOfLines.length * 18.75 +
                  75 +
                  col * 50 -
                  textUpFrontCenter
                }
                href={LibraryIcons[icon]}
                onMouseEnter={() => setifIconHover(icon)}
                onMouseLeave={() => setifIconHover("")}
              />
            );
          })}
        </g>
      ) : (
        ""
      )}
    </g>
  );
}
