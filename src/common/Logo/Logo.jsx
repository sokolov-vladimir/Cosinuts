import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import logoBrown from "./../../assets/images/logo_brown.svg";
import logoYellow from "./../../assets/images/logo_yellow.svg";
import { constants } from "../../constants/constants";

export function Logo({ addStyles, logoBig = true }) {
	if (logoBig) {
		return (
			<Link className={addStyles} to={constants.routes.main}>
				<img alt="logo" className={styles.logo_brown} src={logoBrown} />
			</Link>
		);
	} else {
		return (
			<Link className={addStyles} to={constants.routes.main}>
				<img alt="logo" className={styles.logo_yellow} src={logoYellow} />
			</Link>
		);
	}
}
