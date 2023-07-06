import { useSelector } from "react-redux";
import styles from "./CategoryNavigation.module.scss";
import { Link } from "react-router-dom";

export function CategoryNavigation({ addStyles }) {
	const category = useSelector((stage) => stage.products.products);

	return (
		<nav className={`${styles.navigation} ${addStyles}`}>
			{category.map((category) => (
				<Link
					className={styles.link}
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
