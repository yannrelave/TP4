import PropTypes from "prop-types";
import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

function TimerField({ timer, setTimer }) {
  return (
    <>
      <h1>Coucou</h1>
    </>
  );
}

function Timer() {
  let [timer, setTimer] = useState(0);

  function startTimer() {
    console.log("oui");
    setInterval(alertFunc, 1000);
  }

  function alertFunc() {
    setTimer((timer = timer + 1));
  }

  return (
    <>
      <div>
        <label>
          <TimerField timer={timer} setTimer={setTimer} />
        </label>
        <label>
          <alertFunc />
        </label>
      </div>
      <div>
        <button onClick={() => startTimer()}>Lancer</button>
      </div>
      <div>{`Time : ${timer}`}</div>
    </>
  );
}

export default Timer;
