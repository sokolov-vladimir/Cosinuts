// import { UseSelector } from "react-redux/es/hooks/useSelector";
// import { useState } from "react";

export const collectOrder = (state) => {
	// const state = useSelector((state) => state.products.products);
	// const [basket, setBasket] = useState([]);

	// useEffect(() => {
	const basketState = [];

	state.forEach((category) => {
		category.products.forEach((product) => {
			if (product.cartCount > 0) {
				product = { ...product, url: category.url };
				basketState.push(product);
			}
		});
	});

	// setBasket(basketState);
	// localStorage.setItem("basket", JSON.stringify(basketState));
	// }, [state]);

	return basketState;
};
