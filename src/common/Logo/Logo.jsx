import { Link } from "react-router-dom";
import logoBrown from "./../../assets/images/logo_brown.svg";
import logoYellow from "./../../assets/images/logo_yellow.svg";

export function Logo({ logoBig = true }) {
	const logo = logoBig ? logoBrown : logoYellow;

	return (
		<Link to="/">
			<img src={logo} alt="logo" />
		</Link>
	);
}
