import { createSlice } from "@reduxjs/toolkit";
import { findProduct } from "../helper/findProduct";
import { initialState } from "./initialState";

const productSlice = createSlice({
	name: "productSlice",
	initialState: {
		products: initialState,
		searchValue: "",
	},
	reducers: {
		increaseWeight: (state, action) => {
			const product = findProduct(state, action);

			if (product.cartWeight === 0) {
				product.cartCount = 1;
			}

			product.cartWeight = +(product.cartWeight + 0.2).toFixed(1);
			product.cartPrice = +(product.cartWeight * product.price).toFixed(2);
		},
		decreaseWeight: (state, action) => {
			const product = findProduct(state, action);

			product.cartWeight = +(product.cartWeight - 0.2).toFixed(1);
			product.cartPrice = +(product.cartWeight * product.price).toFixed(2);

			if (product.cartWeight === 0) {
				product.cartCount = 0;
			}
		},
		deleteProduct: (state, action) => {
			const product = findProduct(state, action);
			product.cartCount = 0;
			product.cartPrice = 0;
			product.cartWeight = 0;
		},
		setSearchValue: (state, action) => {
			state.searchValue = action.payload;
		},
	},
});

export const { increaseWeight, decreaseWeight, deleteProduct, setSearchValue } =
	productSlice.actions;
export default productSlice.reducer;
