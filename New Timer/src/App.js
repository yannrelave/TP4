import React, { Component } from "react";
import "./styles.css";
import SevenSegmentDisplay from "./react-seven-segment-display";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { counterSec: 0, counterMin: 0 };
  }

  incrementer() {
    this.setState((oldState) => {
      if (oldState.counterSec === 59) {
        return { counterSec: 0, counterMin: oldState.counterMin + 1 };
      }
      return { counterSec: oldState.counterSec + 1 };
    });
  }

  startTimer() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.incrementer();
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>
          {this.state.counterMin} min {this.state.counterSec} sec
        </h1>
        {/* <SevenSegmentDisplay value={this.state.counterSec} />  */}
        <br />
        <button onClick={() => this.incrementer()}>Incrémenter</button>
        <button onClick={() => this.startTimer()}>Lancer le Timer</button>
        <button onClick={() => clearInterval(this.intervalId)}>
          Stoper le Timer
        </button>
      </>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <Timer />
    </div>
  );
}
