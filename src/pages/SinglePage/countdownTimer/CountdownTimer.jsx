/**
 * CountdownTimer component
 *
 * Displays a countdown timer until a specified date and time.
 *
 * @example
 * <CountdownTimer />
 *
 * @returns {React.ReactElement} A React element representing the countdown timer.
 */

import "./CountdownTimer.scss";

import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
   /**
   * Calculates the time left until the specified date and time.
   *
   * @returns {Object} An object with properties for days, hours, minutes, and seconds left.
   */
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-30T12:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  /**
   * Formats a time value to display with leading zeros if necessary.
   *
   * @param {number} time The time value to format.
   * @returns {string} The formatted time value.
   */
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <p>Offer expires in:</p>
      <div className="timer">
        <div className="timer__item">
          <h4>{formatTime(timeLeft.days)}</h4>
          <p>Days</p>
        </div>
        <div className="timer__item">
          <h4>{formatTime(timeLeft.hours)}</h4>
          <p>Hours</p>
        </div>
        <div className="timer__item">
          <h4>{formatTime(timeLeft.minutes)}</h4>
          <p>Minutes</p>
        </div>
        <div className="timer__item">
          <h4>{formatTime(timeLeft.seconds)}</h4>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

/**
 * App component
 *
 * The top-level component for the application.
 *
 * @returns {React.ReactElement} A React element representing the application.
 */

function App() {
  return (
    <div className="App">
      <CountdownTimer />
    </div>
  );
}

export default App;
