import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import styles from "./OrderPage.module.scss";
import { changeFormState } from "../../reducer/formSlice";
import { collectOrder } from "../../helper/collectOrder";
import { Container } from "../../common/Container/Container";
import { constants } from "../../constants/constants";
import { deleteProduct } from "../../reducer/productSlice";
import { OrderForm } from "./OrderForm/OrderForm";
import { OrderList } from "./OrderList/OrderList";
import { Title } from "../../common/Title/Title";
import { useValidate } from "./../../validation/useValidate";

export function OrderPage() {
	const formState = useSelector((state) => state.form.form);
	const productsState = useSelector((state) => state.products.products);
	const dispatch = useDispatch();

	const [isDisabled, setIsDisabled] = useState(true);
	const [isHandleOrder, setIsHandleOrder] = useState(false);

	const orderList = collectOrder(productsState);
	const { error, validate } = useValidate();

	const handleChange = ({ target }) => {
		const { name, type, value, checked } = target;
		validate(name, value);

		const stateFormValue = type === "checkbox" ? checked : value;
		dispatch(changeFormState({ name, stateFormValue }));
	};

	const handleOrder = () => {
		orderList.map((product) => {
			dispatch(
				deleteProduct({
					id: product.id,
					category: product.url,
				})
			);
		});

		setIsHandleOrder(true);
		console.log(formState);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const countTotalPrice = () => {
		return orderList.reduce((sum, product) => sum + product.cartPrice, 0);
	};

	useEffect(() => {
		const disable =
			Object.values(error).find((element) => element !== "") ||
			formState.name === "" ||
			formState.phone === "" ||
			formState.city === "" ||
			formState.street === "" ||
			formState.house === "" ||
			formState.cookie === false;
		setIsDisabled(disable);
	}, [
		error,
		formState.name,
		formState.phone,
		formState.city,
		formState.street,
		formState.house,
		formState.cookie,
	]);

	if (isHandleOrder) {
		return (
			<Container>
				<Title title={constants.orderPage.title} />
				<h2>{constants.orderPage.orderPlaced}</h2>
			</Container>
		);
	} else {
		return (
			<Container>
				<Title title={constants.orderPage.title} />
				<div className={styles.container}>
					<OrderForm
						error={error}
						formState={formState}
						handleChange={handleChange}
						handleOrder={handleOrder}
						handleSubmit={handleSubmit}
						isDisabled={isDisabled}
					/>
					<OrderList orderList={orderList} countTotalPrice={countTotalPrice} />
				</div>
			</Container>
		);
	}
}
