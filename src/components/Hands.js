import { useState } from "react";
import HandRPS from "./HandRPS";
import HandSelection from "./HandSelection";

function Hands(props) {
  const [gameStart, setGameStart] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");

  return (
    <div>
      {!gameStart && (
        <HandSelection
          start={() => setGameStart(true)}
          choice={(choice) => setPlayerChoice(choice)}
        />
      )}
      {gameStart && (
        <HandRPS
          choice={playerChoice}
          gameOver={props.gameOver}
          restartGame={props.restartGame}
          restart={() => setGameStart(false)}
          gameEnd={props.gameEnd}
          changeScore={props.changeScore}
          score={props.score}
        />
      )}
    </div>
  );
}

export default Hands;
