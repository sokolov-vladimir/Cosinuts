import { useParams } from "react-router";
import { useSelector } from "react-redux";
import styles from "./CatalogPage.module.scss";
import { Card } from "../../common/Card/Card";
import { CategoryNavigation } from "../../common/Navigation/CategoryNavigation/CategoryNavigation";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Search } from "../../common/Search/Search";
import { Title } from "../../common/Title/Title";

export function CatalogPage() {
	const productsState = useSelector((state) => state.products.products);
	const { url } = useParams();

	const { products, url: categoryURL } = productsState.find((category) => {
		return url === undefined
			? category.url === "dried-fruits"
			: category.url === url;
	});

	return (
		<Container>
			<Title title={constants.titles.catalog} />

			<div className={styles.container}>
				<div className={styles.navigation}>
					<h4 className={styles.navigation_title}>{constants.pages.catalog}</h4>
					<CategoryNavigation
						activeLink={styles.add_activeLink}
						addStyles={styles.add_navigation}
					/>
				</div>

				<div className={styles.content}>
					<div className={styles.content_top}>
						<div>1234</div>
						<Search />
					</div>

					<div className={styles.content_main}>
						{products.map((product) => (
							<Card category={categoryURL} key={product.id} product={product} />
						))}
					</div>

					<div className={styles.content_bottom}>1234</div>
				</div>
			</div>
		</Container>
	);
}
