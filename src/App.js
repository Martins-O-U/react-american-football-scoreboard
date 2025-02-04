//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  
  // You'll need one for the home score and another for the away score.
  const [scoreH, setScoreH] = useState(0);
  const [scoreA, setScoreA] = useState(0);

  const Touchdown = ()=>{
    setScoreH(scoreH + 7)
  }
  const FieldGoal = ()=>{
    setScoreH(scoreH + 3)
  }

  
  const TouchdownB = ()=>{
    setScoreA(scoreA + 7)
  }

  const FieldGoalB = ()=>{
    setScoreA(scoreA + 3)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{scoreH}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{scoreA}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={Touchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={FieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={TouchdownB}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={FieldGoalB}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
