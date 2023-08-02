import styles from "./Main.module.scss";
import { Router } from "../../routes/Router";

export function Main() {
	return (
		<div className={styles.wrapper}>
			<Router />
		</div>
	);
}
