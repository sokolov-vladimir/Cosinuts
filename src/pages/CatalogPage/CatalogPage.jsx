import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CatalogPage.module.scss";
import { Card } from "../../common/Card/Card";
import { CategoryNavigation } from "../../common/Navigation/CategoryNavigation/CategoryNavigation";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Pagination } from "../../common/Pagination/Pagination";
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

	const { currentPage, pageSize } = useSelector((state) => state.products);
	const [productsDisplay, setProductsDisplay] = useState([]);

	useEffect(() => {
		let productsCount = products.length;
		let pagesCount = Math.ceil(productsCount / pageSize);

		let startProduct = 0;

		for (let i = 2; i <= pagesCount; i++) {
			if (currentPage === 1) {
				break;
			}

			startProduct += pageSize;

			if (currentPage === i) {
				break;
			}
		}

		const endProduct = startProduct + pageSize;

		const newArray = products.slice(startProduct, endProduct);
		setProductsDisplay(newArray);
	}, [categoryURL, currentPage, pageSize, products]);

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
						<Pagination products={products} />
						<Search />
					</div>

					<div className={styles.content_main}>
						{productsDisplay.map((product) => (
							<Card category={categoryURL} key={product.id} product={product} />
						))}
					</div>

					<div className={styles.content_bottom}>
						<Pagination products={products} />
					</div>
				</div>
			</div>
		</Container>
	);
}
