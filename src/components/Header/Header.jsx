import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { HeaderTop } from "./HeaderTop/HeaderTop";

export function Header() {
	const { pathname, state } = useLocation();
	const displayHeaderBottom =
		(!state && <HeaderBottom />) || (pathname.length < 2 && <HeaderBottom />);

	return (
		<header className={styles.header}>
			<HeaderTop />
			{displayHeaderBottom}
		</header>
	);
}
