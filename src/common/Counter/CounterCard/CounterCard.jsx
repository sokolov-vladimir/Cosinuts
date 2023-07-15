import styles from "./CounterCard.module.scss";
import { Button } from "../../Button/Button";
import { constants } from "../../../constants/constants";

export function CounterCard({
	addStyles,
	handleButtonClick,
	handleWeightAdd,
	handleWeightSub,
	isShowWeight,
	product,
}) {
	const { cartPrice, cartWeight, id } = product;

	if (isShowWeight) {
		return (
			<div className={styles.container}>
				<span>{constants.counter.inCart} </span>
				<div className={styles.weightBox}>
					<Button
						addStyles={styles.addStylesButtonWeight}
						handleClick={handleWeightSub}
						id={id}
						title={constants.buttons.minus}
					/>
					<span className={styles.weight}>{cartWeight.toFixed(1)}</span>
					<Button
						addStyles={styles.addStylesButtonWeight}
						handleClick={handleWeightAdd}
						id={id}
						title={constants.buttons.plus}
					/>
					<span>{constants.measurement.kilo}</span>
				</div>
				<span className={styles.price}>{cartPrice.toFixed(2)} &#x20bd;</span>
			</div>
		);
	} else {
		return (
			<div className={styles.container}>
				<Button
					addStyles={styles.addStylesButton}
					handleClick={handleButtonClick}
					id={id}
					title={constants.buttons.inCart}
				/>
			</div>
		);
	}
}
