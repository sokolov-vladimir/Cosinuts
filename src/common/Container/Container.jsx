import styles from "./Container.module.scss";
import { Logo } from "../Logo/Logo";

export function Container({ addLogo = false, addStyles, children }) {
	return (
		<section className={`${addStyles} ${styles.container} `}>
			{children}
			{addLogo && <Logo />}
		</section>
	);
}
