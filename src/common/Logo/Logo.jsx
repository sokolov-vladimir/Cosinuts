import { Link } from "react-router-dom";
import logo from "./../../assets/images/logo_yellow.svg";

export function Logo() {
	return (
		<Link to="/">
			<img src={logo} alt="logo" />
		</Link>
	);
}
