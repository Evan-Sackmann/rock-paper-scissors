import { useState } from "react"
import Hands from "./Hands"

function Game() {
	const [gameEnd, setGameEnd] = useState(false)
	return (
		<div className="game-container">
			<Hands
				gameOver={() => setGameEnd(true)}
				gameEnd={gameEnd}
				restartGame={() => setGameEnd(false)}
				
			/>
		</div>
	)
}

export default Game
