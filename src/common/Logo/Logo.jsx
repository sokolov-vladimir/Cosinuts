import { Link } from "react-router-dom";
import logoBrown from "./../../assets/images/logo_brown.svg";
import logoYellow from "./../../assets/images/logo_yellow.svg";
import { constants } from "../../constants/constants";

export function Logo({ addStyles, logoBig = true }) {
	const logo = logoBig ? logoBrown : logoYellow;

	return (
		<Link className={addStyles} to={constants.routes.main}>
			<img alt="logo" src={logo} />
		</Link>
	);
}
