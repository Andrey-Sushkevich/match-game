import React, { useState } from "react";
import Score from "./components/Score";
import Board from "./components/Board";
import "./styles.css";
import { ScoreProvider } from "./scoreContext";
let numCards = 16;
export default function App() {
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [isGameInitialized, setIsGameInitialized] = useState(false);
  const [appKey, setAppKey] = useState(0);
  const [matchesArray, setMatchesArray] = useState([]);

  return (
    <div className="App" key={appKey}>
      <h1>Memory Game</h1>
      <ScoreProvider
        value={{
          score: score,
          updateScore: () => {
            let updatedScore = score + 1;
            setScore(updatedScore);

            if (updatedScore === numCards / 2) {
              setWin(true);
            }
          },
          updateMatchesArray: (val) => {
            setMatchesArray((prevVal) => {
              return [...prevVal, val];
            });
          },
          win: win,
          resetGame: () => {
            setAppKey(appKey + 1);
            setWin(false);
            setScore(0);
            setMatchesArray([]);
          },
          matchesArray: matchesArray,
          isGameInitialized: isGameInitialized,
          setIsGameInitialized: setIsGameInitialized,
        }}
      >
        <Score />
        <Board />
      </ScoreProvider>
    </div>
  );
}