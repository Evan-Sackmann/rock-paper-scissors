function HandSelection(props) {
	function selectHand(choice) {
		props.start()
		props.choice(choice)
	}
	return (
		<div className="icon-container">
			<div onClick={() => selectHand("paper")} className="icon-paper">
				<img src="/images/icon-paper.svg" alt="paper" />
			</div>

			<div
				onClick={() => selectHand("scissors")}
				className="icon-scissors"
			>
				<img src="/images/icon-scissors.svg" alt="scissors" />
			</div>

			<div onClick={() => selectHand("rock")} className="icon-rock">
				<img src="/images/icon-rock.svg" alt="rock" />
			</div>
		</div>
	)
}

export default HandSelection
