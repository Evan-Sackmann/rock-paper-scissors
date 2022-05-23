import { useState, useEffect } from "react";
import EndMessage from "./EndMessage";

function HandRPS(props) {
  const [houseChoice, setHouseChoice] = useState("");
  const [houseMessage, setHouseMessage] = useState("PICKING");
  function decideHouseChoice() {
    const num = Math.floor(Math.random() * 3);
    setHouseMessage("THE HOUSE PICKED");
    props.gameOver();
    switch (num) {
      case 0:
        return setHouseChoice("rock");
      case 1:
        return setHouseChoice("paper");
      case 2:
        return setHouseChoice("scissors");
      default:
        throw new Error("Something went wrong");
    }
  }
  console.log(props.choice);
  function displayPlayerChoice(props) {
    switch (props.choice) {
      case "rock":
        return <img src="../images/icon-rock.svg" alt="Rock" />;
      case "paper":
        return <img src="../images/icon-paper.svg" alt="Paper" />;
      case "scissors":
        return <img src="../images/icon-scissors.svg" alt="Scissors" />;
      default:
        throw new Error("Something went wrong");
    }
  }

  useEffect(() => {
    setTimeout(decideHouseChoice, 1000);

    // decideHouseChoice()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-content">
      <div className="RPS-container">
        <div className="RPS-choices">
          <div className={`icon-${props.choice}-rps`}>
            {displayPlayerChoice(props)}
          </div>
          <h3>YOU PICKED</h3>
        </div>
        <div className="RPS-choices">
          <div className={`icon-${houseChoice}-rps`}>
            <img src={`../images/icon-${houseChoice}.svg`} alt={houseChoice} />
          </div>
          <h3>{houseMessage}</h3>
        </div>
      </div>
      {props.gameEnd && (
        <EndMessage
          restart={props.restart}
          restartGame={props.restartGame}
          playerChoice={props.choice}
          houseChoice={houseChoice}
        />
      )}
    </div>
  );
}

export default HandRPS;
