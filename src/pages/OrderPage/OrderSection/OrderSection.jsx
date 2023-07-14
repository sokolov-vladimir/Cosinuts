import styles from "./OrderSection.module.scss";

export function OrderSection({ title, children }) {
	return (
		<div className={styles.container}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</div>
	);
}
