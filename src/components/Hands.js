import { useState } from "react"
import HandRPS from "./HandRPS"
import HandSelection from "./HandSelection"

function Hands(props) {
	const [gameStart, setGameStart] = useState(false)
	const [playerChoice, setPlayerChoice] = useState("")

	return (
		<div>
			{!gameStart && (
				<HandSelection
					start={() => setGameStart(true)}
					choice={(choice) => setPlayerChoice(choice)}
				/>
			)}
			{gameStart && (
				<HandRPS choice={playerChoice} gameOver={props.gameOver} />
			)}
		</div>
	)
}

export default Hands
