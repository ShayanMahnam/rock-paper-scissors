import React,{useEffect, useState} from 'react';
import './App.css';
import Skull from "./images/skull.svg";

function App() {
  const [userChoice, setUserChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [userPoints, setUserPoints] = useState([]);
  const [computerPoints, setComputerPoints] = useState([]);
  const [turnResult, setTurnResult] = useState(null);
  const [result, setResult] = useState("Let's see who wins");
  const [gameOver, setGameOver] = useState(false);
  const choices = ["rock", "paper", "scissors"];

   const handleClick = (value) => {
     setUserChoice(value);
     generateComputerChoice();
   };

   const generateComputerChoice = () => {
     const randomChoice = choices[Math.floor(Math.random() * choices.length)];
     setComputerChoice(randomChoice);
   };

   const reset = () => {
     window.location.reload();
   };

   useEffect(() => {
     const comboMoves = userChoice + computerChoice;
     if (userPoints.length <= 4 && computerPoints.length <= 4) {
       if (
         comboMoves === "scissorspaper" ||
         comboMoves === "rockscissors" ||
         comboMoves === "paperrock"
       ) {
         // userPoints.current += 1
         const updatedUserPoints = [
           ...userPoints,
           <img className='svg-img' src={Skull} alt="skull" />,
         ];
         setUserPoints(updatedUserPoints);
         setTurnResult("User gets the point!");
         if (updatedUserPoints.length === 5) {
           setResult("User Wins");
           const gameOff = true;
           setGameOver(gameOff);
         }
       }

       if (
         comboMoves === "paperscissors" ||
         comboMoves === "scissorsrock" ||
         comboMoves === "rockpaper"
       ) {
         // computerPoints.current += 1
         const updatedComputerPoints = [
           ...computerPoints,
           <img className="svg-img" src={Skull} alt="skull" />,
         ];
         setComputerPoints(updatedComputerPoints);
         setTurnResult("Computer gets the point!");
         if (updatedComputerPoints.length === 5) {
           setResult("Computer Wins");
           const gameOff = true;
           setGameOver(gameOff);
         }
       }

       if (
         comboMoves === "paperpaper" ||
         comboMoves === "rockrock" ||
         comboMoves === "scissorsscissors"
       ) {
         setTurnResult("No one gets a point!");
       }
     }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [computerChoice, userChoice]);

  return (
    <div className="App">
      <h1 className="heading">Rock-Paper-Scissors</h1>
      <div className="score">
        <div className="score-board">
          <h1>User Points:</h1>
          <ul className="score-board">
            {userPoints.map((pic, index) => (
              <li className="svg-score" key={index}>
                {pic}
              </li>
            ))}
          </ul>
        </div>
        <div className="score-board">
          <h1>Computer Points:</h1>
          <ul className="score-board">
            {computerPoints.map((pic, index) => (
              <li className="svg-score" key={index}>
                {pic}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="choice">
        <div className="choice-user">
          <img
            className="user-hand"
            src={`../images/${userChoice}.jpg`}
            alt="hand"
          />
        </div>
        <div className="choice-computer">
          <img
            className="computer-hand"
            src={`../images/${computerChoice}.jpg`}
            alt="hand"
          />
        </div>
      </div>

      <div className="button-div">
        {choices.map((choice, index) => (
          <button
            className="button"
            key={index}
            onClick={() => handleClick(choice)}
            disabled={gameOver}
          >
            {choice}
          </button>
        ))}
      </div>

      <div className="result">
        <h1>Turn Result: {turnResult}</h1>
        <h1>Final Result: {result}</h1>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game?
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
