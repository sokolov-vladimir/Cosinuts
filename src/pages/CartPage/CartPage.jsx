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

import cart_empty from "./../../assets/images/icon_cart_empty.svg";

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
		<Container addStyles={styles.add_container_styles}>
			<Title title={constants.titles.cart} />
			<div className={styles.container}>
				<div className={styles.order}>
					{basket.map((product) => (
						<div className={styles.product} key={product.id}>
							<div className={styles.product_about}>
								<Link
									state={true}
									to={`${constants.routes.catalog}/${product.url}/${product.id}`}
								>
									<img
										alt={product.images.alt}
										className={styles.product_image}
										src={product.images.src}
									></img>
								</Link>
								<div className={styles.title_box}>
									<Link
										state={true}
										className={styles.product_title}
										to={`${constants.routes.catalog}/${product.url}/${product.id}`}
									>
										{product.title}
									</Link>
									<p className={styles.product_description}>
										{product.description}
									</p>
								</div>
							</div>
							<div className={styles.product_details}>
								<div className={styles.product_price}>
									{product.price.toFixed(2)} &#x20bd;
								</div>
								<Counter category={product.url} product={product} />
								<Button
									addStyles={styles.add_button_styles}
									handleClick={() => removeProduct(product.id, product.url)}
									title="&times;"
								/>
							</div>
						</div>
					))}
				</div>

				{basket.length ? (
					<div className={styles.total}>
						<div className={styles.total_box}>
							<span className={styles.total_title}>
								{constants.cartPage.totalSum}{" "}
							</span>
							<span className={styles.total_price}>
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
					<div className={styles.empty_box}>
						<img
							alt="empty cart"
							className={styles.empty_image}
							src={cart_empty}
						/>
						{constants.cartPage.emptyBasket}
					</div>
				)}
			</div>
		</Container>
	);
}
