import styles from "./CounterCard.module.scss";
import cart from "./../../../assets/images/icon_cart.svg";
import bag from "./../../../assets/images/icon_bag.svg";
import { Button } from "../../Button/Button";

export function CounterCard({
	product,
	urlID,
	isShowWeight,
	handleWeightAdd,
	handleWeightSub,
	handleButtonClick,
}) {
	const { price: productPrice, cartPrice, cartWeight, id } = product;

	if (isShowWeight) {
		return (
			<div className={styles.container}>
				<span>В корзине </span>
				<div className={styles.weightBox}>
					<Button
						title="-"
						id={id}
						handleClick={handleWeightSub}
						addStyles={styles.addStylesButtonWeight}
					/>
					<span className={styles.weight}>{cartWeight.toFixed(1)}</span>
					<Button
						title="+"
						id={id}
						handleClick={handleWeightAdd}
						addStyles={styles.addStylesButtonWeight}
					/>
					<span>кг</span>
				</div>
				<span className={styles.price}>
					{/* {cartPrice.toFixed(2).toLocaleString()} &#x20bd; */}
					{cartPrice.toFixed(2)} &#x20bd;
				</span>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{/* <span className={styles.price}>
				{productPrice.toLocaleString()} &#x20bd;
			</span> */}

			<Button
				title={urlID ? "Корзина" : "В корзину"}
				image={urlID ? bag : cart}
				id={id}
				handleClick={handleButtonClick}
				addStyles={styles.addStylesButton}
			/>
		</div>
	);
}
