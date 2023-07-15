import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
	products: productSlice,
	form: formSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
