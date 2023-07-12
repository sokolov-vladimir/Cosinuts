import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import { CounterCard } from "./CounterCard/CounterCard";
import { CounterCart } from "./CounterCart/CounterCart";
import { increaseWeight, decreaseWeight } from "../../reducer/productSlice";

export function Counter({ product, category, addStyles }) {
	const dispatch = useDispatch();
	const { cartWeight } = product;
	const [isShowWeight, setIsShowWeight] = useState(!!cartWeight);
	const { id: urlID } = useParams();
	const { pathname } = useLocation();
	const isCartPage = pathname === "/cart";

	const handleWeightAdd = ({ currentTarget }) => {
		dispatch(increaseWeight({ id: currentTarget.id, category: category }));
	};

	const handleWeightSub = ({ currentTarget }) => {
		if (cartWeight === 0.2) setIsShowWeight(!isShowWeight);
		dispatch(decreaseWeight({ id: currentTarget.id, category: category }));
	};

	const handleButtonClick = ({ currentTarget }) => {
		setIsShowWeight(!isShowWeight);
		dispatch(increaseWeight({ id: currentTarget.id, category: category }));
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
					product={product}
					urlID={urlID}
					isShowWeight={isShowWeight}
					handleWeightAdd={handleWeightAdd}
					handleWeightSub={handleWeightSub}
					handleButtonClick={handleButtonClick}
				/>
			);
		}
	};

	return <>{render()}</>;
}
