import styles from "./Button.module.scss";

export function Button({ addStyles, handleClick, id, title }) {
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
