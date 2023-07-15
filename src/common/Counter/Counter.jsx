import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { CounterCard } from "./CounterCard/CounterCard";
import { CounterCart } from "./CounterCart/CounterCart";
import { decreaseWeight, increaseWeight } from "../../reducer/productSlice";

export function Counter({ addStyles, category, product }) {
	const { cartWeight } = product;
	const [isShowWeight, setIsShowWeight] = useState(!!cartWeight);

	const { pathname } = useLocation();
	const isCartPage = pathname === "/cart";

	const dispatch = useDispatch();

	const handleWeightAdd = ({ currentTarget }) => {
		dispatch(increaseWeight({ category: category, id: currentTarget.id }));
	};

	const handleWeightSub = ({ currentTarget }) => {
		if (cartWeight === 0.2) setIsShowWeight(!isShowWeight);
		dispatch(decreaseWeight({ category: category, id: currentTarget.id }));
	};

	const handleButtonClick = ({ currentTarget }) => {
		setIsShowWeight(!isShowWeight);
		dispatch(increaseWeight({ category: category, id: currentTarget.id }));
	};

	const render = () => {
		if (isCartPage) {
			return (
				<CounterCart
					handleWeightAdd={handleWeightAdd}
					handleWeightSub={handleWeightSub}
					product={product}
				/>
			);
		} else {
			return (
				<CounterCard
					addStyles={addStyles}
					handleButtonClick={handleButtonClick}
					handleWeightAdd={handleWeightAdd}
					handleWeightSub={handleWeightSub}
					isShowWeight={isShowWeight}
					product={product}
				/>
			);
		}
	};

	return <>{render()}</>;
}
