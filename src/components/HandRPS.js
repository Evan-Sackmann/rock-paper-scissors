import { useState, useEffect } from "react"
import EndMessage from "./EndMessage"

function HandRPS(props) {
	const [houseChoice, setHouseChoice] = useState("")
	const [houseMessage, setHouseMessage] = useState("PICKING")
	function decideHouseChoice() {
		const num = Math.floor(Math.random() * 3)
		setHouseMessage("THE HOUSE PICKED")
		props.gameOver()
		switch (num) {
			case 0:
				return setHouseChoice("rock")
			case 1:
				return setHouseChoice("paper")
			case 2:
				return setHouseChoice("scissors")
			default:
				throw new Error("Something went wrong")
		}
	}
	useEffect(() => {
		setTimeout(decideHouseChoice, 1000)

		// decideHouseChoice()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className="main-content">
			<div className="RPS-container">
				<div className="RPS-choices">
					<div className={`icon-${props.choice}-rps`}>
						<img
							src={`/images/icon-${props.choice}.svg`}
							alt={props.choice}
						/>
					</div>
					<h3>YOU PICKED</h3>
				</div>
				<div className="RPS-choices">
					<div className={`icon-${houseChoice}-rps`}>
						<img
							src={`/images/icon-${houseChoice}.svg`}
							alt={houseChoice}
						/>
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
	)
}

export default HandRPS
