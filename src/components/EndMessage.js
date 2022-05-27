function EndMessage(props) {
  function restartGame() {
    props.restart();
    props.restartGame();
  }

  function decideWinner() {
    if (
      (props.playerChoice === "rock" && props.houseChoice === "paper") ||
      (props.playerChoice === "paper" && props.houseChoice === "scissors") ||
      (props.playerChoice === "scissors" && props.houseChoice === "rock")
    ) {
      return "YOU LOSE";
    } else if (
      (props.playerChoice === "rock" && props.houseChoice === "scissors") ||
      (props.playerChoice === "paper" && props.houseChoice === "rock") ||
      (props.playerChoice === "scissors" && props.houseChoice === "paper")
    ) {
      return "YOU WIN";
    } else {
      return "YOU TIED";
    }
  }

  return (
    <div className="end-message">
      <h1>{decideWinner()}</h1>
      <button onClick={restartGame}>PLAY AGAIN</button>
    </div>
  );
}

export default EndMessage;
