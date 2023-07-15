import styles from "./CounterCart.module.scss";
import { Button } from "../../Button/Button";
import { constants } from "../../../constants/constants";

export function CounterCart({ handleWeightAdd, handleWeightSub, product }) {
	const { cartPrice, cartWeight, id } = product;

	return (
		<div className={styles.container}>
			<Button
				addStyles={styles.addStylesButton}
				handleClick={handleWeightSub}
				id={id}
				title={constants.buttons.minus}
			/>
			<span className={styles.counter}>
				{cartWeight} {constants.measurement.kilo}
			</span>
			<Button
				addStyles={styles.addStylesButton}
				handleClick={handleWeightAdd}
				id={id}
				title={constants.buttons.plus}
			/>
			<span className={styles.price}>
				{cartPrice.toLocaleString()} &#x20bd;
			</span>
		</div>
	);
}
