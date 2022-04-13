import { useState } from "react"
import EndMessage from "./EndMessage"
import Hands from "./Hands"

function Game() {
	const [gameEnd, setGameEnd] = useState(false)
	return (
		<div className="game-container">
			<Hands gameOver={() => setGameEnd(true)} />
			{gameEnd && <EndMessage />}
		</div>
	)
}

export default Game
