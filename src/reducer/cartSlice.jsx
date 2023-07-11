import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// export const setCookies = createAsyncThunk(
// 	"cartCount/setcartCount",
// 	async (action) => {
// 		Cookies.set("cartCount", action, { expires: 7, path: "" });
// 	}
// );

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		cartInitialState: 0,
	},
	reducers: {
		addCartCount: (state) => {
			state.cartInitialState += 1;
		},
		subCartCount: (state, action) => {
			action.payload
				? (state.cartInitialState -= action.payload)
				: (state.cartInitialState -= 1);
		},
	},
});

export const { addCartCount, subCartCount } = cartSlice.actions;
export default cartSlice.reducer;

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import Cookies from "js-cookie";

// // export const setCookies = createAsyncThunk(
// // 	"cartCount/setcartCount",
// // 	async (action) => {
// // 		Cookies.set("cartCount", action, { expires: 7, path: "" });
// // 	}
// // );

// const cartSlice = createSlice({
// 	name: "cartSlice",
// 	initialState: {
// 		cartArray: [],
// 		cartCount: 0,
// 	},
// 	reducers: {
// 		addCartCount: (state, action) => {
// 			const product = state.cartArray.find(
// 				(element) => element.id === action.payload.id
// 			);

// 			if (!product) {
// 				state.cartArray.push(action.payload);
// 				state.cartCount = state.cartArray.length;
// 			} else {
// 				let newArray = state.cartArray.map((element) => {
// 					if (element.id === action.payload.id) {
// 						return {
// 							...element,
// 							cartCount: (element.cartCount += action.payload.cartCount),
// 							cartPrice: (element.cartPrice += action.payload.cartPrice),
// 						};
// 					}

// 					return element;
// 				});

// 				state.cartArray = newArray;
// 			}
// 		},
// 		subCartCount: (state, action) => {
// 			action.payload
// 				? (state.cartCount -= action.payload)
// 				: (state.cartCount -= 1);
// 		},
// 	},
// });

// export const { addCartCount, subCartCount } = cartSlice.actions;
// export default cartSlice.reducer;
