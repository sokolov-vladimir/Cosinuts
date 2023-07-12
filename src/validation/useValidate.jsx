import { useState } from "react";

export function useValidate() {
	const [error, setError] = useState({});

	const patternName = /^[A-ZА-ЯЁ'][a-z-а-яё' ]+[a-zа-яё']?$/g;
	const patternPhone = /^\+375\(\d{2}\)\d{7}$/;
	const patternStreet = /[A-Za-z0-9 a-zA-Zа-яА-ЯёЁ]/g;
	const patternHouse = /^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i;

	function validate(name, value) {
		switch (name) {
			case "name": {
				if (!patternName.test(value)) {
					setError({ ...error, name: "Заполните поле ФИО" });
				} else {
					setError({ ...error, name: "" });
				}
				break;
			}
			case "phone": {
				if (!patternPhone.test(value)) {
					setError({ ...error, phone: "Заполните поле телефон" });
				} else {
					setError({ ...error, phone: "" });
				}
				break;
			}
			case "street": {
				if (!patternStreet.test(value)) {
					setError({ ...error, street: "Заполните поле улица" });
				} else {
					setError({ ...error, street: "" });
				}
				break;
			}
			case "house": {
				if (!patternHouse.test(value)) {
					setError({ ...error, house: "Заполните поле номер дома" });
				} else {
					setError({ ...error, house: "" });
				}
				break;
			}

			default:
				break;
		}
	}

	return { error, validate };
}
