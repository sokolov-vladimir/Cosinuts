import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { pages } from "../../data/pages";

export function Navigation() {
	const isActiveLink = ({ isActive }) => (isActive ? "active-link" : "");

	return (
		<nav className={styles.navigation}>
			<div className={styles.content}>
				{pages.map((page) => {
					return (
						<NavLink key={page.id} to={page.url} className={isActiveLink}>
							{page.title}
						</NavLink>
					);
				})}
			</div>
		</nav>
	);
}
