import React from "react";
import { Card } from "./Card.js";
import { ScoreConsumer } from "../scoreContext";
import "./board.css";


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomizeArray = (num) => {
  let results = [];
  let tempArray = [];
  for (let i = 0; i < num; i++) {
    tempArray.push(i);
  }
  while (results.length < num) {
    results.push(tempArray.splice(getRandomInt(tempArray.length), 1)[0]);
  }

  return results;
};

const makeCards = (num) => {
  let randomArray = randomizeArray(num);
  let results = [];

  for (let i = 0; i < randomArray.length; i++) {
    results.push(
      <Card key={randomArray[i].toString()} index={randomArray[i]} />
    );
  }

  console.log("making cards");

  return results;
};

let numCards = 16;
let cards = makeCards(numCards);
const Board = () => {
  return (
    <ScoreConsumer>
      {(value) => {
        return (
          <section id="board">
            {value.win ? (cards = makeCards(numCards)) : cards}
          </section>
        );
      }}
    </ScoreConsumer>
  );
};

export default Board;