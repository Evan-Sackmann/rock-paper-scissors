import rock from "../images/icon-rock.svg"
import paper from "../images/icon-paper.svg"
import scissors from "../images/icon-scissors.svg"

function HandSelection(props) {
	function selectHand(choice) {
		props.start()
		props.choice(choice)
	}
	return (
		<div className="icon-container">
			<div onClick={() => selectHand("paper")} className="icon-paper">
				<img src={paper} alt="paper" />
			</div>

			<div
				onClick={() => selectHand("scissors")}
				className="icon-scissors"
			>
				<img src={scissors} alt="scissors" />
			</div>

			<div onClick={() => selectHand("rock")} className="icon-rock">
				<img src={rock} alt="rock" />
			</div>
		</div>
	)
}

export default HandSelection
