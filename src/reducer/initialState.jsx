import category_dried_fruits from "./../assets/images/category_dried_fruits.jpg";
import category_nuts from "./../assets/images/category_nuts.jpg";
import apricots from "./../assets/images/product_driedApricots.png";
import brazilNut from "./../assets/images/product_brazilNut.png";

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
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				id: 1,
				images: {
					src: apricots,
					alt: "apricots",
				},
				price: 620,
				title: "Изюм",
			},
			{
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				id: 2,
				images: {
					src: apricots,
					alt: "apricots",
				},
				price: 480,
				title: "Курага",
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
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				id: 3,
				images: {
					src: brazilNut,
					alt: "apricots",
				},
				price: 620,
				title: "Кешью",
			},
			{
				caloric: {
					protein: 12.0,
					fat: 14.0,
					calory: 16.0,
					carb: 123,
					weight: 340,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
				id: 4,
				images: {
					src: brazilNut,
					alt: "apricots",
				},
				price: 620,
				title: "Арахис",
			},
		],
	},
];
