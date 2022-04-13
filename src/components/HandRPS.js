import { useState, useEffect } from "react"

function HandRPS(props) {
	const [houseChoice, setHouseChoice] = useState("")
	function decideHouseChoice() {
		const num = Math.floor(Math.random() * 3)
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
				<h3>THE HOUSE PICKED</h3>
			</div>
		</div>
	)
}

export default HandRPS
