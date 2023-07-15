import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export function Button({
	addStyles,
	disabled = false,
	handleClick,
	id,
	isLink = false,
	title,
	to,
}) {
	if (isLink) {
		return (
			<Link className={styles.button} state={true} to={to}>
				{title}
			</Link>
		);
	} else {
		return (
			<button
				className={`${addStyles} ${styles.button} `}
				disabled={disabled}
				id={id}
				onClick={handleClick}
			>
				{title}
			</button>
		);
	}
}
