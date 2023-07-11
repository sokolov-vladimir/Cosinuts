import styles from "./CartPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Counter } from "../../common/Counter/Counter";

export function CartPage() {
	// const cartProducts = useSelector((state) => state.cart.cartArray);

	// console.log(cartProducts);

	return (
		<Container>
			<Title title="Корзина" />
			<div>
				Корзина
				{/* {cartProducts.map((product) => (
					<div key={product.id}>
						<span>{product.title}</span>
						<Counter category={product.url} product={product} />
					</div>
				))} */}
			</div>
		</Container>
	);
}
