import styles from "./CartPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Counter } from "../../common/Counter/Counter";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteProduct } from "../../reducer/productSlice";
import { Link } from "react-router-dom";
import { Button } from "../../common/Button/Button";

export function CartPage() {
	const state = useSelector((state) => state.products.products);
	const dispatch = useDispatch();
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		const basketState = [];

		state.forEach((category) => {
			category.products.forEach((product) => {
				if (product.cartCount > 0) {
					product = { ...product, url: category.url };
					basketState.push(product);
				}
			});
		});

		setBasket(basketState);
		localStorage.setItem("basket", JSON.stringify(basketState));
	}, [state]);

	const removeProduct = (id, url, cartCount) => {
		const newBasket = basket.filter((product) => product.id !== id);
		setBasket(newBasket);
		// dispatch(subCartCount(cartCount));
		dispatch(
			deleteProduct({
				id: id,
				category: url,
			})
		);
	};

	const totalPrice = () => {
		return basket.reduce((sum, product) => sum + product.cartPrice, 0);
	};

	return (
		<Container>
			<Title title="Корзина" />
			<div>
				<div className={styles.container}>
					<div className={styles.order}>
						{basket.map((product) => (
							<div className={styles.product} key={product.id}>
								<div className={styles.productAbout}>
									<Link
										to={`/catalog/${product.url}/${product.id}`}
										state={true}
									>
										<img
											src={product.images.src}
											alt={product.images.alt}
										></img>
									</Link>
									<div className={styles.titleBox}>
										<span className={styles.title}>{product.title}</span>
										<p className={styles.description}>{product.description}</p>
									</div>
								</div>
								<div className={styles.productDetails}>
									<Counter
										product={product}
										// dispatch={dispatch}
										category={product.url}
										addStyles={styles}
									/>
									<Button
										title="&times;"
										handleClick={() =>
											removeProduct(product.id, product.url, product.cartCount)
										}
										addStyles={styles.addStylesButton}
									/>
								</div>
							</div>
						))}
					</div>

					<div className={styles.total}>
						<div className={styles.totalBox}>
							<span className={styles.totalTitle}>Итого к оплате: </span>
							<span className={styles.totalPrice}>
								{totalPrice().toLocaleString()} &#x20bd;
							</span>
						</div>
						<Button isLink={true} to="/order" title="Оформить заказ" />
						{/* <Link */}
						{/* className={styles.totalButton}
							// to={constants.routs.order}
							state="true"
						> */}
						{/* {constants.common.place_order} */}
						{/* </Link> */}
					</div>
				</div>
			</div>
		</Container>
	);
}
