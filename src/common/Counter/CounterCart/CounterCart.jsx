import styles from "./CounterCart.module.scss";
import { Button } from "../../Button/Button";
import { constants } from "../../../constants/constants";

export function CounterCart({ handleWeightAdd, handleWeightSub, product }) {
	const { cartPrice, cartWeight, id } = product;

	return (
		<div className={styles.container}>
			<Button
				addStyles={styles.add_button_styles}
				handleClick={handleWeightSub}
				id={id}
				title={constants.buttons.minus}
			/>
			<span className={styles.counter}>{cartWeight}</span>
			<Button
				addStyles={styles.add_button_styles}
				handleClick={handleWeightAdd}
				id={id}
				title={constants.buttons.plus}
			/>
			<span className={styles.kilo}>{constants.measurement.kilo}</span>
			<span className={styles.price}>{cartPrice.toFixed(2)} &#x20bd;</span>
		</div>
	);
}
