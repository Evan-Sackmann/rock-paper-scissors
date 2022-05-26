import { useState } from "react";
import Hands from "./Hands";

function Game(props) {
  const [gameEnd, setGameEnd] = useState(false);
  return (
    <div className="game-container">
      <Hands
        gameOver={() => setGameEnd(true)}
        gameEnd={gameEnd}
        restartGame={() => setGameEnd(false)}
        changeScore={props.changeScore}
        score={props.score}
      />
    </div>
  );
}

export default Game;
