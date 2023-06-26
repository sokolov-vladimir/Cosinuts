import styles from "./Header.module.scss";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { HeaderTop } from "./HeaderTop/HeaderTop";

export function Header() {
	return (
		<header className={styles.header}>
			<HeaderTop />
			<HeaderBottom />
		</header>
	);
}
