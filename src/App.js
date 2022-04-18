import { useState } from "react"
import Footer from "./components/Footer"
import Game from "./components/Game"
import Header from "./components/Header"

function App() {
	const [currentScore, setCurrentScore] = useState(0)
	return (
		<div className="background">
			<Header score={currentScore} />
			<Game changeScore={setCurrentScore} score={currentScore} />
			<Footer />
		</div>
	)
}

export default App
