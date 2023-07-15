export const collectOrder = (state) => {
	const basketState = [];

	state.forEach((category) => {
		category.products.forEach((product) => {
			if (product.cartCount > 0) {
				product = { ...product, url: category.url };
				basketState.push(product);
			}
		});
	});

	return basketState;
};
