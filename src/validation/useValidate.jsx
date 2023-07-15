import { useState } from "react";
import { constants } from "../constants/constants";

export function useValidate() {
	const [error, setError] = useState({});

	const patternHouse = /^[1-9][0-9]*([a-z]|[а-я]|(\/[1-9][0-9]*))?$/i;
	const patternName = /^[A-ZА-ЯЁ'][a-z-а-яё' ]+[a-zа-яё']?$/g;
	const patternPhone = /^\+375\(\d{2}\)\d{7}$/;
	const patternStreet = /[A-Za-z0-9 a-zA-Zа-яА-ЯёЁ]/g;

	function validate(name, value) {
		switch (name) {
			case "name": {
				if (!patternName.test(value)) {
					setError({ ...error, name: constants.validation.errorName });
				} else {
					setError({ ...error, name: "" });
				}
				break;
			}
			case "phone": {
				if (!patternPhone.test(value)) {
					setError({ ...error, phone: constants.validation.errorPhone });
				} else {
					setError({ ...error, phone: "" });
				}
				break;
			}
			case "street": {
				if (!patternStreet.test(value)) {
					setError({ ...error, street: constants.validation.errorStreet });
				} else {
					setError({ ...error, street: "" });
				}
				break;
			}
			case "house": {
				if (!patternHouse.test(value)) {
					setError({ ...error, house: constants.validation.errorHouse });
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
