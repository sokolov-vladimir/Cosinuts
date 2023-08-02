import styles from "./OrderSection.module.scss";

export function OrderSection({ children, title }) {
	return (
		<div className={styles.container}>
			{title && <h2 className={styles.title}>{title}</h2>}
			{children}
		</div>
	);
}
