import { Link } from "react-router-dom";
import styles from "./CartButton.module.scss";
import { constants } from "../../../../constants/constants";

export function CartButton() {
	return (
		<Link className={styles.cartButton} to="/cart" state={true}>
			<span className={styles.title}>{constants.buttons.cart}</span>
			<span className={styles.count}>4</span>
		</Link>
	);
}
