import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SearchPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";
import { Card } from "../../common/Card/Card";

export function SearchPage() {
	const productsState = useSelector((state) => state.products.products);
	const searchValueState = useSelector((state) => state.products.searchValue);

	const [searchedProducts, setSearchedProducts] = useState([]);
	const title = searchValueState
		? `${constants.titles.search} - ${searchValueState}`
		: `${constants.titles.search}`;

	useEffect(() => {
		const newArray = [];
		const wordsArray = searchValueState.split(" ");

		productsState.forEach((category) => {
			category.products.forEach((product) => {
				let found = true;

				wordsArray.forEach((word) => {
					if (!product.title.toLowerCase().includes(word.toLowerCase())) {
						found = false;
					}
				});

				if (found) {
					product = { ...product, url: category.url };
					newArray.push(product);
				}
			});
		});
		setSearchedProducts(newArray);
	}, [productsState, searchValueState]);

	if (searchValueState.length) {
		return (
			<Container>
				<Title title={title} />
				<div>
					{searchedProducts.map((product) => (
						<Card category={product.url} key={product.id} product={product} />
					))}
				</div>
			</Container>
		);
	} else {
		return (
			<Container>
				<Title title={title} />
				<h2>{constants.searchPage.notFound}</h2>
			</Container>
		);
	}
}
