import styles from "./CounterCart.module.scss";
import { Button } from "../../Button/Button";

export function CounterCart({ product, handleWeightAdd, handleWeightSub }) {
	const { cartPrice, cartWeight, id } = product;

	return (
		<div className={styles.container}>
			<Button
				title="-"
				id={id}
				handleClick={handleWeightSub}
				addStyles={styles.addStylesButton}
			/>
			<span className={styles.counter}>{cartWeight}</span>
			<Button
				title="+"
				id={id}
				handleClick={handleWeightAdd}
				addStyles={styles.addStylesButton}
			/>
			<span className={styles.price}>
				{cartPrice.toLocaleString()} &#x20bd;
			</span>
		</div>
	);
}
