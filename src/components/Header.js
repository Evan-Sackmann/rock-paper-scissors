import logo from "../images/logo.svg";

function Header(props) {
	return (
		<div className="header">
			<img className="header-logo" src={logo} alt="Rock Paper Scissors" />
		</div>
	);
}

export default Header;
