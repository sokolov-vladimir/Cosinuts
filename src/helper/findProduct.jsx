export const findProduct = (state, action) => {
	const { id, category } = action.payload;
	let product = null;

	state.products.forEach((element) => {
		if (element.url === category) {
			element.products.forEach((item) => {
				if (item.id === +id) {
					product = item;
				}
			});
		}
	});

	return product;
};
