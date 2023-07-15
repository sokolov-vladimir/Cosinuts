import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CategoryNavigation.module.scss";

export function CategoryNavigation({ activeLink, addStyles }) {
	const productsState = useSelector((state) => state.products.products);
	const { url } = useParams();

	const isActive = (categoryID, categoryURL) => {
		if (categoryID === 1 && url === undefined) {
			return ` ${activeLink} ${styles.link}`;
		} else {
			return categoryURL === url
				? `${activeLink} ${styles.link} `
				: `${styles.link}`;
		}
	};

	return (
		<nav className={`${addStyles} ${styles.navigation} `}>
			{productsState.map((category) => (
				<Link
					className={isActive(category.id, category.url)}
					key={category.id}
					state={true}
					to={`/catalog/${category.url}`}
				>
					{category.title}
				</Link>
			))}
		</nav>
	);
}
