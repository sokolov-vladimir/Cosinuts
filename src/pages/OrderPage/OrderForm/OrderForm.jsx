import styles from "./OrderForm.module.scss";
import { OrderSection } from "../OrderSection/OrderSection";
import { Button } from "../../../common/Button/Button";

export function OrderForm({
	handleSubmit,
	handleChange,
	isDisabled,
	handleOrder,
	orderState,
	error,
}) {
	return (
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
						checked={orderState.delivery === "pickup"}
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
					<label htmlFor="courierPostOfice">доставка курьером Белпочты</label>
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
						checked={orderState.payment === "cash"}
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
						value={orderState.name}
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
						value={orderState.phone}
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
							value={orderState.street}
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
							value={orderState.house}
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
							value={orderState.building}
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
							value={orderState.flat}
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
							value={orderState.entrance}
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
							value={orderState.floor}
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
						value={orderState.cookie}
						onChange={handleChange}
					/>
					<label className={styles.cookie_label} htmlFor="cookie">
						Мы используем файлы Cookie для улучшения работы, персонализации и
						повышения удобства пользования нашим сайтом.
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
	);
}
