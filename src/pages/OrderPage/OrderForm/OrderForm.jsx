import { useEffect } from "react";
import styles from "./OrderForm.module.scss";
import { constants } from "../../../constants/constants";
import { Button } from "../../../common/Button/Button";
import { OrderSection } from "./OrderSection/OrderSection";
import { setCookies } from "../../../reducer/formSlice";

export function OrderForm({
	dispatch,
	error,
	formState,
	handleChange,
	handleOrder,
	handleSubmit,
	isDisabled,
}) {
	useEffect(() => {
		dispatch(setCookies(JSON.stringify(formState)));
	}, [formState]);

	return (
		<form className={styles.form_container} onSubmit={handleSubmit}>
			<OrderSection title={constants.orderForm.titleDelivery}>
				<div className={styles.radio_box}>
					<label htmlFor="pickup">{constants.orderForm.labelPickup}</label>
					<input
						checked={formState.delivery === "pickup"}
						id="pickup"
						name="delivery"
						onChange={handleChange}
						type="radio"
						value="pickup"
					/>
				</div>
				<div className={styles.radio_box}>
					<label htmlFor="courier">{constants.orderForm.labelСourier}</label>
					<input
						id="courier"
						name="delivery"
						onChange={handleChange}
						type="radio"
						value="courier"
					/>
				</div>
				<div className={styles.radio_box}>
					<label htmlFor="postOfice">
						{constants.orderForm.labelPostOfice}
					</label>
					<input
						id="postOfice"
						name="delivery"
						onChange={handleChange}
						type="radio"
						value="postofice"
					/>
				</div>
				<div className={styles.radio_box}>
					<label htmlFor="courierPostOfice">
						{constants.orderForm.labelCourierPostOfice}
					</label>
					<input
						id="courierPostOfice"
						name="delivery"
						onChange={handleChange}
						type="radio"
						value="courierPostOfice"
					/>
				</div>
			</OrderSection>

			<OrderSection title={constants.orderForm.titlePayment}>
				<div className={styles.radio_box}>
					<label htmlFor="cash">{constants.orderForm.labelСash}</label>
					<input
						checked={formState.payment === "cash"}
						id="cash"
						name="payment"
						onChange={handleChange}
						type="radio"
						value="cash"
					/>
				</div>
				<div className={styles.radio_box}>
					<label htmlFor="card">{constants.orderForm.labelСard}</label>
					<input
						id="card"
						name="payment"
						onChange={handleChange}
						type="radio"
						value="card"
					/>
				</div>
				<div className={styles.radio_box}>
					<label htmlFor="epos">{constants.orderForm.labelEpos}</label>
					<input
						id="epos"
						name="payment"
						onChange={handleChange}
						type="radio"
						value="epos"
					/>
				</div>
				<div className={styles.radio_box}>
					<label htmlFor="erip">{constants.orderForm.labelErip}</label>
					<input
						id="erip"
						name="payment"
						onChange={handleChange}
						type="radio"
						value="erip"
					/>
				</div>
			</OrderSection>

			<OrderSection title={constants.orderForm.titleContacts}>
				<div>
					<span className={styles.star}>{constants.symbols.star}</span>{" "}
					{constants.orderForm.required}
				</div>
				<div className={styles.input_box}>
					<label className={styles.required} htmlFor="name">
						{constants.orderForm.labelName}
					</label>
					<input
						id="name"
						name="name"
						onChange={handleChange}
						placeholder={constants.placeholders.name}
						type="text"
						value={formState.name}
					/>
					<span className={styles.error}>{error.name}</span>
				</div>
				<div className={styles.input_box}>
					<label className={styles.required} htmlFor="phone">
						{constants.orderForm.labelPhone}
					</label>
					<input
						id="phone"
						name="phone"
						onChange={handleChange}
						placeholder={constants.placeholders.phone}
						type="tel"
						value={formState.phone}
					/>
					<span className={styles.error}>{error.phone}</span>
				</div>
				<div className={styles.input_box}>
					<label className={styles.required}>
						{constants.orderForm.labelСity}
					</label>
					<select name="city" onChange={handleChange}>
						<option value="minsk">{constants.cities.minsk}</option>
						<option value="vitebsk">{constants.cities.vitebsk}</option>
						<option value="gomel">{constants.cities.gomel}</option>
						<option value="mogilev">{constants.cities.mogilev}</option>
						<option value="grodno">{constants.cities.grodno}</option>
						<option value="brest">{constants.cities.brest}</option>
					</select>
				</div>
				<div className={styles.address_box}>
					<div className={styles.input_box}>
						<label className={styles.required} htmlFor="street">
							{constants.orderForm.labelStreet}
						</label>
						<input
							id="street"
							name="street"
							onChange={handleChange}
							placeholder={constants.placeholders.street}
							type="text"
							value={formState.street}
						/>
						<span className={styles.error}>{error.street}</span>
					</div>
					<div className={styles.input_box}>
						<label className={styles.required} htmlFor="house">
							{constants.orderForm.labelHouse}
						</label>
						<input
							id="house"
							name="house"
							onChange={handleChange}
							placeholder={constants.placeholders.house}
							type="text"
							value={formState.house}
						/>
						<span className={styles.error}>{error.house}</span>
					</div>
				</div>
				<div className={styles.address_box}>
					<div className={styles.input_box}>
						<label htmlFor="building">
							{constants.orderForm.labelBuilding}
						</label>
						<input
							id="building"
							name="building"
							onChange={handleChange}
							placeholder={constants.placeholders.building}
							type="text"
							value={formState.building}
						/>
					</div>
					<div className={styles.input_box}>
						<label htmlFor="flat">{constants.orderForm.labelFlat}</label>
						<input
							id="flat"
							name="flat"
							onChange={handleChange}
							placeholder={constants.placeholders.flat}
							type="text"
							value={formState.flat}
						/>
					</div>
				</div>
				<div className={styles.address_box}>
					<div className={styles.input_box}>
						<label htmlFor="entrance">
							{constants.orderForm.labelEntrance}
						</label>
						<input
							id="entrance"
							name="entrance"
							onChange={handleChange}
							placeholder={constants.placeholders.entrance}
							type="text"
							value={formState.entrance}
						/>
					</div>
					<div className={styles.input_box}>
						<label htmlFor="floor">{constants.orderForm.labelFloor}</label>
						<input
							id="floor"
							name="floor"
							onChange={handleChange}
							placeholder={constants.placeholders.floor}
							type="text"
							value={formState.floor}
						/>
					</div>
				</div>
				<div className={styles.cookie_box}>
					<input
						id="cookie"
						name="cookie"
						onChange={handleChange}
						value={formState.cookie}
						type="checkbox"
					/>
					<label className={styles.cookie_label} htmlFor="cookie">
						{constants.orderForm.labelСookie}
					</label>
				</div>

				<Button
					title={constants.buttons.order}
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
