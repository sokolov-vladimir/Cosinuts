import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

export function Button({
	addStyles,
	handleClick,
	id,
	isLink = false,
	title,
	to,
}) {
	if (isLink) {
		return (
			<Link className={styles.button} to={to} state={true}>
				{title}
			</Link>
		);
	}

	return (
		<button
			id={id}
			className={`${styles.button} ${addStyles}`}
			onClick={handleClick}
		>
			{title}
		</button>
	);
}
