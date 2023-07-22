import { NavLink } from "react-router-dom";
import styles from "./PagesNavigation.module.scss";
import { pages } from "./../../../data/pages";

export function PagesNavigation({ isShowMenu, setIsShowMenu }) {
	const isActiveLink = ({ isActive }) =>
		isActive ? `active_link ${styles.link}` : `${styles.link}`;

	return (
		<nav
			className={
				isShowMenu
					? `${styles.navigation} ${styles.show_menu}`
					: styles.navigation
			}
		>
			<div
				className={isShowMenu ? styles.blur : ""}
				onClick={() => setIsShowMenu(!isShowMenu)}
			></div>
			<div className={styles.content}>
				{pages.map((page) => {
					return (
						<NavLink
							className={isActiveLink}
							key={page.id}
							onClick={() => setIsShowMenu(!isShowMenu)}
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
