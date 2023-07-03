import styles from "./Container.module.scss";
import { Logo } from "../Logo/Logo";

export function Container({ children, addStyles, addLogo = false }) {
	return (
		<section className={`${styles.container} ${addStyles}`}>
			{children}
			{addLogo && <Logo />}
		</section>
	);
}
