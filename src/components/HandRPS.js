import { useState, useEffect } from "react";
import EndMessage from "./EndMessage";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
function HandRPS(props) {
  const [houseChoice, setHouseChoice] = useState("");
  const [houseChoiceString, setHouseChoiceString] = useState("");
  const [houseMessage, setHouseMessage] = useState("PICKING");
  function decideHouseChoice() {
    const num = Math.floor(Math.random() * 3);
    setHouseMessage("THE HOUSE PICKED");
    props.gameOver();
    switch (num) {
      case 0:
        setHouseChoiceString("rock");
        return setHouseChoice(rock);
      case 1:
        setHouseChoiceString("paper");
        return setHouseChoice(paper);
      case 2:
        setHouseChoiceString("scissors");
        return setHouseChoice(scissors);
      default:
        throw new Error("Something went wrong");
    }
  }
  function displayPlayerChoice(props) {
    switch (props.choice) {
      case "rock":
        return <img src={rock} alt="Rock" />;
      case "paper":
        return <img src={paper} alt="Paper" />;
      case "scissors":
        return <img src={scissors} alt="Scissors" />;
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
          <div className={`icon-${houseChoiceString}-rps`}>
            <img src={houseChoice} alt="" />
          </div>
          <h3>{houseMessage}</h3>
        </div>
      </div>
      {props.gameEnd && (
        <EndMessage
          restart={props.restart}
          restartGame={props.restartGame}
          playerChoice={props.choice}
          houseChoice={houseChoiceString}
          changeScore={props.changeScore}
          score={props.score}
        />
      )}
    </div>
  );
}

export default HandRPS;
