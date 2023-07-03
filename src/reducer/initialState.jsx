import category_dried_fruits from "./../assets/images/category_dried_fruits.jpg";
import category_nuts from "./../assets/images/category_nuts.jpg";
import apricots from "./../assets/images/product_apricots.png";
import cashew from "./../assets/images/product_cashew.png";

export const initialState = [
	{
		id: 1,
		url: "dried-fruits",
		title: "Сухофрукты",
		description: "Изюм, курага, чернослив, финики, инжир",
		image: {
			src: category_dried_fruits,
			alt: "dried fruits",
		},
		products: [
			{
				id: 1,
				title: "Изюм",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: apricots,
					alt: "apricots",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 2,
				title: "Курага",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: apricots,
					alt: "apricots",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
		],
	},
	{
		id: 2,
		url: "nuts",
		title: "Орехи",
		description:
			"Кешью, фундук, миндаль, фисташки, арахис, грецкий орех, бразильский орех",
		image: {
			src: category_nuts,
			alt: "nuts",
		},
		products: [
			{
				id: 3,
				title: "Кешью",
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				weight: 340,
				price: 620,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: cashew,
					alt: "cashew",
				},
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
			},
			{
				id: 4,
				title: "Арахис",
				description: "Фаршированная яблоками",
				weight: 225,
				price: 460,
				cartPrice: 0,
				cartCount: 0,
				images: {
					src: cashew,
					alt: "cashew",
				},
				caloric: {
					protein: 22.0,
					fat: 24.0,
					calory: 26.0,
					carb: 234,
					weight: 225,
				},
			},
		],
	},
];
