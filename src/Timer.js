
import React, { useState, useRef } from 'react';
import '../src/timer.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function Timer() {
  const [title] = useState('Start the game');
  const [timeLeft, setTimeLeft] = useState(3 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) 
    return;
  
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1)
         return timeLeft - 1;
      });
    }, 1000);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className='app'>
      <h2>{title}</h2>
      <div className='timer'>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className='button'>
        {!isRunning && <button onClick={startTimer}>Start</button>}
      </div>
    </div>
  );
}