import { useEffect, useState } from "react";
import styles from "./OrderPage.module.scss";
import { useValidate } from "./../../validation/useValidate";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";
import { OrderSection } from "./OrderSection/OrderSection";

const initialState = {
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
	const [state, setState] = useState(initialState);
	const [isDisabled, setIsDisabled] = useState(true);
	const { error, validate } = useValidate();

	const handleChange = ({ target }) => {
		const { name, type, value, checked } = target;
		const stateValue = type === "checkbox" ? checked : value;
		validate(name, value);
		setState({ ...state, [name]: stateValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(state);
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

	return (
		<Container>
			<Title title="Оформление заказа" />
			<div className="app">
				<form className="entry" onSubmit={handleSubmit}>
					<OrderSection title="Способ доставки">
						<div className={styles.radio_box}>
							<label htmlFor="pickup">Самовывоз</label>
							<input
								id="pickup"
								name="delivery"
								type="radio"
								value="pickup"
								checked={state.delivery === "pickup"}
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="courier">Доставка курьером</label>
							<input
								id="courier"
								name="delivery"
								type="radio"
								value="courier"
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="postOfice">Доставка до отделения Белпочты</label>
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
								Доставка курьером Белпочты
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
							<label htmlFor="cash">Наличными при получении</label>
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
							<label htmlFor="card">Банковской картой при получении</label>
							<input
								id="card"
								name="payment"
								type="radio"
								value="card"
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="epos">Онлайн-платёж e-Pos</label>
							<input
								id="epos"
								name="payment"
								type="radio"
								value="epos"
								onChange={handleChange}
							/>
						</div>
						<div className={styles.radio_box}>
							<label htmlFor="erip">Онлайн-платёж через систему ЕРИП</label>
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
						<span>* полйа обйазательные длйа заполненийа</span>
						<div>
							<label htmlFor="name">ФИО</label>
							<input
								id="name"
								name="name"
								type="text"
								value={state.name}
								placeholder="Введите ФИО"
								onChange={handleChange}
							/>
							<span>{error.name}</span>
						</div>
						<div>
							<label htmlFor="phone">Телефон</label>
							<input
								id="phone"
								name="phone"
								type="tel"
								value={state.phone}
								placeholder="Введите номер телефона"
								onChange={handleChange}
							/>
							<span style={{ color: "red" }}>{error.phone}</span>
						</div>
						<div>
							<label>Город</label>
							<select name="city" onChange={handleChange}>
								<option value="minsk">Минск</option>
								<option value="vitebsk">Витебск</option>
								<option value="gomel">Гомель</option>
								<option value="mogilev">Могилев</option>
								<option value="grodno">Гродно</option>
								<option value="brest">Брест</option>
							</select>
						</div>
						<div>
							<div>
								<label htmlFor="street">Улица</label>
								<input
									id="street"
									name="street"
									type="text"
									value={state.street}
									placeholder="Введите название улицы"
									onChange={handleChange}
								/>
								<span>{error.street}</span>
							</div>
							<div>
								<label htmlFor="house">Дом</label>
								<input
									id="house"
									name="house"
									type="text"
									value={state.house}
									placeholder="Введите номер дома"
									onChange={handleChange}
								/>
								<span>{error.house}</span>
							</div>
						</div>
						<div>
							<div>
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
							<div>
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
						<div>
							<div>
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
							<div>
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
						<div>
							<label htmlFor="cookie">
								Мы используем файлы Cookie для улучшения работы, персонализации
								и повышения удобства пользования нашим сайтом.
							</label>
							<input
								id="cookie"
								type="checkbox"
								name="cookie"
								value={state.cookie}
								onChange={handleChange}
								// onChange={(event) => handleChange(event)}
							/>
						</div>

						<button type="submit" disabled={isDisabled}>
							Заказать
						</button>
					</OrderSection>
				</form>
				<div>Заказ</div>
			</div>
		</Container>
	);
}
