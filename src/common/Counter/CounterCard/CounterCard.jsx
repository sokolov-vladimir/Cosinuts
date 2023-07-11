import styles from "./CounterCard.module.scss";
import cart from "./../../../assets/images/icon_cart.svg";
import bag from "./../../../assets/images/icon_bag.svg";
import { Button } from "../../Button/Button";

export function CounterCard({
	product,
	urlId,
	isShowCount,
	handleCountAdd,
	handleCountSub,
	handleCartClick,
}) {
	const { price: productPrice, cartPrice, cartCount, id } = product;

	if (isShowCount) {
		return (
			<div className={styles.container}>
				<span className={styles.counter}>{cartCount}</span>
				<Button
					title="-"
					id={id}
					handleClick={handleCountSub}
					addStyles={styles.addStylesButton}
				/>
				<span className={styles.price}>
					{cartPrice.toLocaleString()} &#x20bd;
				</span>
				<Button
					title="+"
					id={id}
					handleClick={handleCountAdd}
					addStyles={styles.addStylesButton}
				/>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<span className={styles.price}>
				{productPrice.toLocaleString()} &#x20bd;
			</span>

			<Button
				title={urlId ? "Корзина" : "В корзину"}
				image={urlId ? bag : cart}
				id={id}
				handleClick={handleCartClick}
			/>
		</div>
	);
}

// import styles from "./Counter.module.scss";
// import { decreasePrice, increasePrice } from "../../reducer/productSlice";
// import { useDispatch, useSelector } from "react-redux";

// export function Counter({ category, product }) {
// 	const dispatch = useDispatch();

// 	const handleCountAdd = () => {
// 		// dispatch(addCartCount());
// 		dispatch(increasePrice({ id: product.id, category: category }));
// 		console.log(category);
// 		console.log(product);
// 	};

// 	const handleCountSub = () => {
// 		// dispatch(addCartCount());
// 		if (product.cartCount > 0.2)
// 			dispatch(decreasePrice({ id: product.id, category: category }));
// 	};

// 	return (
// 		<div>
// 			<button onClick={handleCountSub}>-</button>
// 			<div>
// 				<span>{product.cartCount}</span>
// 				<span>кг</span>
// 				<span>{product.cartPrice}</span>
// 			</div>
// 			<button onClick={handleCountAdd}>+</button>
// 		</div>
// 	);
// }
