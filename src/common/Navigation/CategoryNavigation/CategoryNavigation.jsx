import { useSelector } from "react-redux";
import styles from "./CategoryNavigation.module.scss";
import { Link, useParams } from "react-router-dom";

export function CategoryNavigation({ addStyles, activeLink }) {
	// const category = useSelector((stage) => stage.products.products);
	const category = useSelector(
		(state) => state.productSlice.productInitialState
	);

	const { url } = useParams();

	const isActive = (categoryId, categoryUrl) => {
		if (categoryId === 1 && url === undefined) {
			return `${styles.link} ${activeLink}`;
		}

		return categoryUrl === url
			? `${styles.link} ${activeLink}`
			: `${styles.link}`;
	};

	return (
		<nav className={`${styles.navigation} ${addStyles}`}>
			{category.map((category) => (
				<Link
					className={isActive(category.id, category.url)}
					key={category.id}
					to={`/catalog/${category.url}`}
					state={true}
				>
					{category.title}
				</Link>
			))}
		</nav>
	);
}
