import { createSlice } from "@reduxjs/toolkit";
// import { findProduct } from "../helper/findProduct";
// import { initialState } from "./initialState";

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

const orderSlice = createSlice({
	name: "orderSlice",
	initialState: {
		order: initialState,
	},
	reducers: {
		changeOrderSlice: (state, action) => {
			const { name, stateValue } = action.payload;
			state.order[name] = stateValue;
		},
	},
});

export const { changeOrderSlice } = orderSlice.actions;
export default orderSlice.reducer;
