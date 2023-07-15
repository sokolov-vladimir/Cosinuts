import { NavLink } from "react-router-dom";
import styles from "./PagesNavigation.module.scss";
import { pages } from "./../../../data/pages";

export function PagesNavigation() {
	const isActiveLink = ({ isActive }) => (isActive ? "active-link" : "");

	return (
		<nav className={styles.navigation}>
			<div className={styles.content}>
				{pages.map((page) => {
					return (
						<NavLink
							className={isActiveLink}
							key={page.id}
							state={true}
							to={page.url}
						>
							{page.title}
						</NavLink>
					);
				})}
			</div>
		</nav>
	);
}
