import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CartButton.module.scss";
import { constants } from "../../../../constants/constants";

export function CartButton() {
	const state = useSelector((state) => state.products.products);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		let count = 0;

		state.forEach((category) => {
			category.products.forEach((product) => {
				count += product.cartCount;
			});
		});

		setCartCount(count);
	}, [state]);

	return (
		<Link className={styles.cartButton} to="/cart" state={true}>
			<span className={styles.title}>{constants.buttons.cart}</span>
			<span className={styles.count}>{cartCount}</span>
		</Link>
	);
}
