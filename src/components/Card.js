import React from "react";
import "./card.css";
import { ScoreConsumer } from "../scoreContext";
import constants from "./constants.js";

let isMatch = [];
const isMatchFound = (arrayEl) => {
  return (
    arrayEl[0].getAttribute("data-id") === arrayEl[1].getAttribute("data-id")
  );
};

const flipCard = (event, value) => {
  const el = event.currentTarget;
  if (value.matchesArray.indexOf(el.getAttribute("data-index")) !== -1) {
    return;
  }

  if (isMatch.length === 2) {
    return;
  }

  const cardId = el.getAttribute("data-id");
  const display = constants.cardArray.find(
    (element) => element.name === cardId
  );
  el.setAttribute("src", display.img);
  if (!isMatch.find((element) => element === el)) {
 
    isMatch.push(el);
  }
 
  if (isMatch.length === 2) {
    window.setTimeout(() => {
      if (isMatchFound(isMatch)) {
        isMatch.forEach((element) => {
          element.setAttribute( "src","https://stayfurnished.com/skin/frontend/default/stylish/images/bg.png" );
          value.updateMatchesArray(element.getAttribute("data-index"));
        });
        value.updateScore();
      } else {
        isMatch.forEach((element) =>
          element.setAttribute("src", constants.blueBGurl)
        );
      }
      isMatch = [];
    }, 1000);
  }
};

const Card = (props) => {
  const { index } = props;

  return (
    <ScoreConsumer>
      {(value) => {
        return (
          <img
            data-id={constants.cardArray[index].name}
            src={constants.blueBGurl}
            className="card-container"
            alt=""
            data-index={index}
            onClick={(event) => flipCard(event, value)}
          />
        );
      }}
    </ScoreConsumer>
  );
};

export { isMatchFound, Card };