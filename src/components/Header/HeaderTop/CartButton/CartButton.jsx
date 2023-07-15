import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CartButton.module.scss";
import { constants } from "../../../../constants/constants";

export function CartButton() {
	const productsState = useSelector((state) => state.products.products);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;

		productsState.forEach((category) => {
			category.products.forEach((product) => {
				count += product.cartCount;
			});
		});

		setCartCount(count);
	}, [productsState]);

	return (
		<Link className={styles.cartButton} state={true} to={constants.routes.cart}>
			<span className={styles.title}>{constants.buttons.cart}</span>
			<span className={styles.count}>{cartCount}</span>
		</Link>
	);
}
