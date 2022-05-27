import logo from "../images/logo.svg";

function Header(props) {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="Rock Paper Scissors" />
      {/* <div className="header-score-card">
				<p>
					<small>SCORE</small>
				</p>
				<h2>{props.score}</h2>
			</div> */}
    </div>
  );
}

export default Header;
