import { useEffect, useState } from "react";
import styles from "./OrderPage.module.scss";
import { useValidate } from "./../../validation/useValidate";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";
import { OrderSection } from "./OrderSection/OrderSection";
import { collectOrder } from "../../helper/collectOrder";
import { useSelector } from "react-redux";
import { Button } from "./../../common/Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../reducer/productSlice";

const orderState = {
	delivery: "pickup",
	payment: "cash",
	name: "",
	phone: "+375(29)1234567",
	city: "minsk",
	street: "",
	house: "",
	building: "",
	flat: "",
	entrance: "",
	floor: "",
	cookie: false,
};

export function OrderPage() {
	const products = useSelector((state) => state.products.products);
	const order = collectOrder(products);
	const [state, setState] = useState(orderState);
	const [isDisabled, setIsDisabled] = useState(true);
	const { error, validate } = useValidate();
	const [isHandleOrder, setIsHandleOrder] = useState(false);
	const dispatch = useDispatch();

	const handleChange = ({ target }) => {
		const { name, type, value, checked } = target;
		const stateValue = type === "checkbox" ? checked : value;
		validate(name, value);
		setState({ ...state, [name]: stateValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleOrder = () => {
		order.map((product) => {
			dispatch(
				deleteProduct({
					id: product.id,
					category: product.url,
				})
			);
		});

		setIsHandleOrder(true);
		console.log(state);
	};

	const totalPrice = () => {
		return order.reduce((sum, product) => sum + product.cartPrice, 0);
	};

	useEffect(() => {
		const disable =
			Object.values(error).find((element) => element !== "") ||
			state.name === "" ||
			state.phone === "" ||
			state.city === "" ||
			state.street === "" ||
			state.house === "" ||
			state.cookie === false;
		setIsDisabled(disable);
	}, [
		error,
		state.name,
		state.phone,
		state.city,
		state.street,
		state.house,
		state.cookie,
	]);

	if (isHandleOrder) {
		return (
			<Container>
				<Title title="Оформление заказа" />
				<h2>Ваш заказ успешно оформлен!</h2>
			</Container>
		);
	}

	return (
		<Container>
			<Title title="Оформление заказа" />
			<div className={styles.container}>
				<form className={styles.form_container} onSubmit={handleSubmit}>
					<OrderSection title="Способ доставки">
						<div className={styles.radio_box}>
							<label htmlFor="pickup">самовывоз</label>
							<input
								id="pickup"
								name="delivery"
								type="radio"
								value="pickup"
								className={styles.radio}
								checked={state.delivery === "pickup"}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="courier">доставка курьером</label>
							<input
								id="courier"
								name="delivery"
								type="radio"
								value="courier"
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="postOfice">доставка до отделения Белпочты</label>
							<input
								id="postOfice"
								name="delivery"
								type="radio"
								value="postofice"
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="courierPostOfice">
								доставка курьером Белпочты
							</label>
							<input
								id="courierPostOfice"
								name="delivery"
								type="radio"
								value="courierPostOfice"
								onChange={handleChange}
							/>
						</div>
					</OrderSection>

					<OrderSection title="Способ оплаты">
						<div className={styles.radio_box}>
							<label htmlFor="cash">наличными при получении</label>
							<input
								id="cash"
								name="payment"
								type="radio"
								value="cash"
								checked={state.payment === "cash"}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="card">банковской картой при получении</label>
							<input
								id="card"
								name="payment"
								type="radio"
								value="card"
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="epos">онлайн-платёж e-Pos</label>
							<input
								id="epos"
								name="payment"
								type="radio"
								value="epos"
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="erip">онлайн-платёж через систему ЕРИП</label>
							<input
								id="erip"
								name="payment"
								type="radio"
								value="erip"
								onChange={handleChange}
							/>
						</div>
					</OrderSection>

					<OrderSection title="Контактные данные">
						<div>
							<span className={styles.star}>*</span> поля обязательные для
							заполнения
						</div>
						<div className={styles.input_box}>
							<label className={styles.required} htmlFor="name">
								ФИО
							</label>
							<input
								id="name"
								name="name"
								type="text"
								value={state.name}
								placeholder="Введите ФИО"
								onChange={handleChange}
							/>
							<span className={styles.error}>{error.name}</span>
						</div>
						<div className={styles.input_box}>
							<label className={styles.required} htmlFor="phone">
								Телефон
							</label>
							<input
								id="phone"
								name="phone"
								type="tel"
								value={state.phone}
								placeholder="Введите номер телефона"
								onChange={handleChange}
							/>
							<span className={styles.error}>{error.phone}</span>
						</div>
						<div className={styles.input_box}>
							<label className={styles.required}>Город</label>
							<select name="city" onChange={handleChange}>
								<option value="minsk">Минск</option>
								<option value="vitebsk">Витебск</option>
								<option value="gomel">Гомель</option>
								<option value="mogilev">Могилев</option>
								<option value="grodno">Гродно</option>
								<option value="brest">Брест</option>
							</select>
						</div>
						<div className={styles.address_box}>
							<div className={styles.input_box}>
								<label className={styles.required} htmlFor="street">
									Улица
								</label>
								<input
									id="street"
									name="street"
									type="text"
									value={state.street}
									placeholder="Введите название улицы"
									onChange={handleChange}
								/>
								<span className={styles.error}>{error.street}</span>
							</div>
							<div className={styles.input_box}>
								<label className={styles.required} htmlFor="house">
									Дом
								</label>
								<input
									id="house"
									name="house"
									type="text"
									value={state.house}
									placeholder="Введите номер дома"
									onChange={handleChange}
								/>
								<span className={styles.error}>{error.house}</span>
							</div>
						</div>
						<div className={styles.address_box}>
							<div className={styles.input_box}>
								<label htmlFor="building">Корпус</label>
								<input
									id="building"
									name="building"
									type="text"
									value={state.building}
									placeholder="Введите номер корпуса"
									onChange={handleChange}
								/>
							</div>
							<div className={styles.input_box}>
								<label htmlFor="flat">Квартира</label>
								<input
									id="flat"
									name="flat"
									type="text"
									value={state.flat}
									placeholder="Введите номер квартиры"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className={styles.address_box}>
							<div className={styles.input_box}>
								<label htmlFor="entrance">Подъезд</label>
								<input
									id="entrance"
									name="entrance"
									type="text"
									value={state.entrance}
									placeholder="Введите номер подъезда"
									onChange={handleChange}
								/>
							</div>
							<div className={styles.input_box}>
								<label htmlFor="floor">Этаж</label>
								<input
									id="floor"
									name="floor"
									type="text"
									value={state.floor}
									placeholder="Введите номер этажа"
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className={styles.cookie_box}>
							<input
								id="cookie"
								type="checkbox"
								name="cookie"
								value={state.cookie}
								onChange={handleChange}
							/>
							<label className={styles.cookie_label} htmlFor="cookie">
								Мы используем файлы Cookie для улучшения работы, персонализации
								и повышения удобства пользования нашим сайтом.
							</label>
						</div>

						<Button
							title="Заказать"
							disabled={isDisabled}
							handleClick={handleOrder}
							addStyles={
								isDisabled
									? styles.button_is_disabled
									: styles.button_is_not_disabled
							}
						/>
					</OrderSection>
				</form>

				<section className={styles.order_container}>
					<h4 className={styles.order_title}>Ваш заказ</h4>
					{order.map((product) => (
						<div className={styles.order_product} key={product.id}>
							<Link
								className={styles.product_image_box}
								state={true}
								to={`/catalog/${product.url}/${product.id}`}
							>
								<img
									className={styles.product_image}
									src={product.images.src}
									alt={product.images.alt}
								></img>
							</Link>
							<span className={styles.product_title}>{product.title}</span>
							<span className={styles.product_weight}>
								{product.cartWeight} кг
							</span>
							<span className={styles.product_price}>
								{product.cartPrice.toFixed(2)} &#x20bd;
							</span>
						</div>
					))}
					<div className={styles.order_total_sum}>
						<span>Итого к оплате:</span>
						<span className={styles.total_sum}>
							{totalPrice().toFixed(2)} &#x20bd;
						</span>
						{/* {totalPrice().toLocaleString()} &#x20bd; */}
					</div>
				</section>
			</div>
		</Container>
	);
}
