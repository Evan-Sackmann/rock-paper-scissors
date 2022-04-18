function Header(props) {
	return (
		<div className="header">
			<img
				className="header-logo"
				src="/images/logo.svg"
				alt="Rock Paper Scissors"
			/>
			<div className="header-score-card">
				<p>
					<small>SCORE</small>
				</p>
				<h2>{props.score}</h2>
			</div>
		</div>
	)
}

export default Header
