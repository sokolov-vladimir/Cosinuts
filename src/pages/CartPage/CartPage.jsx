import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./CartPage.module.scss";
import { Button } from "../../common/Button/Button";
import { collectOrder } from "../../helper/collectOrder";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Counter } from "../../common/Counter/Counter";
import { deleteProduct } from "../../reducer/productSlice";
import { Title } from "../../common/Title/Title";

export function CartPage() {
	const productsState = useSelector((state) => state.products.products);
	const dispatch = useDispatch();
	const [basket, setBasket] = useState([]);

	useEffect(() => {
		setBasket(collectOrder(productsState));
	}, [productsState]);

	const removeProduct = (id, url) => {
		const newBasket = basket.filter((product) => product.id !== id);
		setBasket(newBasket);
		dispatch(
			deleteProduct({
				category: url,
				id: id,
			})
		);
	};

	const countTotalPrice = () => {
		return basket.reduce((sum, product) => sum + product.cartPrice, 0);
	};

	return (
		<Container>
			<Title title={constants.titles.cart} />
			<div>
				<div className={styles.container}>
					<div className={styles.order}>
						{basket.map((product) => (
							<div className={styles.product} key={product.id}>
								<div className={styles.productAbout}>
									<Link
										state={true}
										to={`${constants.routes.catalog}/${product.url}/${product.id}`}
									>
										<img
											alt={product.images.alt}
											src={product.images.src}
										></img>
									</Link>
									<div className={styles.titleBox}>
										<span className={styles.title}>{product.title}</span>
										<p className={styles.description}>{product.description}</p>
									</div>
								</div>
								<div className={styles.productDetails}>
									<Counter
										addStyles={styles}
										category={product.url}
										product={product}
									/>
									<Button
										addStyles={styles.addStylesButton}
										handleClick={() => removeProduct(product.id, product.url)}
										title="&times;"
									/>
								</div>
							</div>
						))}
					</div>

					{basket.length ? (
						<div className={styles.total}>
							<div className={styles.totalBox}>
								<span className={styles.totalTitle}>
									{constants.cartPage.totalSum}{" "}
								</span>
								<span className={styles.totalPrice}>
									{countTotalPrice().toFixed(2)} &#x20bd;
								</span>
							</div>
							<Button
								isLink={true}
								title={constants.buttons.placeOrder}
								to={constants.routes.order}
							/>
						</div>
					) : (
						<div>{constants.cartPage.emptyBasket}</div>
					)}
				</div>
			</div>
		</Container>
	);
}
