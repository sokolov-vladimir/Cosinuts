import styles from "./Preloader.module.scss";
import spinner from "./../../assets/images/spinner.svg";

export function Preloader() {
	return (
		<div className={styles.preloader}>
			<img alt="spinner" src={spinner} />
		</div>
	);
}
