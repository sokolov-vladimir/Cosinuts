import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoryNavigation.module.scss";
import { constants } from "../../../constants/constants";
import { setCurrentPage } from "../../../reducer/productSlice";

export function CategoryNavigation({ activeLink, addStyles }) {
	const productsState = useSelector((state) => state.products.products);
	const dispatch = useDispatch();
	const { url } = useParams();

	const currentPageToStart = () => {
		dispatch(setCurrentPage(1));
	};

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
					onClick={currentPageToStart}
					state={true}
					to={`${constants.routes.catalog}/${category.url}`}
				>
					{category.title}
				</Link>
			))}
		</nav>
	);
}
