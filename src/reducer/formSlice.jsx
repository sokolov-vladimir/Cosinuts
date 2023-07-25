import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const setCookies = createAsyncThunk(
	"formData/setCookies",
	async (action) => {
		Cookies.set("formData", action, { expires: 7, path: "" });
	}
);

const initialState = {
	building: "",
	city: "minsk",
	cookie: false,
	delivery: "pickup",
	entrance: "",
	flat: "",
	floor: "",
	house: "",
	name: "",
	payment: "cash",
	phone: "+375(29)1234567",
	street: "",
};

const formSlice = createSlice({
	name: "formSlice",
	initialState: {
		form: initialState,
	},
	reducers: {
		changeFormState: (state, action) => {
			const { name, stateFormValue } = action.payload;
			state.form[name] = stateFormValue;
		},
	},
});

export const { changeFormState } = formSlice.actions;
export default formSlice.reducer;
