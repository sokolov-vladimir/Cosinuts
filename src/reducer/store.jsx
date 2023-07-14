import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import orderSlice from "./orderSlice";

const rootReducer = combineReducers({
	products: productSlice,
	order: orderSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
