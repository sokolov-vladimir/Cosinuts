import { Link } from "react-router-dom";
import styles from "./CartButton.module.scss";
import { constants } from "../../../../constants/constants";
import { useSelector } from "react-redux";

export function CartButton() {
	const cartCount = useSelector((state) => state.cartSlice.cartInitialState);
	// const cartCount = useSelector((state) => state.cart.cartCount);

	return (
		<Link className={styles.cartButton} to="/cart" state={true}>
			<span className={styles.title}>{constants.buttons.cart}</span>
			<span className={styles.count}>{cartCount}</span>
		</Link>
	);
}
