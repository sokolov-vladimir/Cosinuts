import category_dried_fruits from "./../assets/images/category_dried_fruits.jpg";
import category_nuts from "./../assets/images/category_nuts.jpg";

import product_dried_apricot from "./../assets/images/product_dried_apricot.png";
import product_dried_cranberry from "./../assets/images/product_dried_cranberry.jpg";

import product_brazil_nut from "./../assets/images/product_brazil_nut.png";
import product_walnut from "./../assets/images/product_walnut.jpg";

export const initialState = [
	{
		description: "Изюм, курага, чернослив, финики, инжир",
		id: 1,
		image: {
			src: category_dried_fruits,
			alt: "dried fruits",
		},
		products: [
			{
				caloric: {
					protein: 5.0,
					fat: 0.5,
					calory: 260,
					carb: 63.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"В сухофрукте есть витамины А, В₁, В₂, В₅, С, РР, минералы (железо, йод, фосфор, натрий, магний), пектины, глюкоза, сахароза, фруктоза.",
				id: 1,
				images: {
					src: product_dried_apricot,
					alt: "dried apricot",
				},
				price: 24.5,
				title: "Курага",
			},
			{
				caloric: {
					protein: 2.5,
					fat: 0.2,
					calory: 334,
					carb: 76.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Помимо важнейшего витамина С в клюкве содержатся: витамины B1, B2, B5, B6, PP, К1; бетаин и биофлавониды; железо, йод и калий.",
				id: 2,
				images: {
					src: product_dried_cranberry,
					alt: "dried cranberry",
				},
				price: 29.0,
				title: "Клюква сушеная",
			},
		],
		title: "Сухофрукты",
		url: "dried-fruits",
	},
	{
		description:
			"Кешью, фундук, миндаль, фисташки, арахис, грецкий орех, бразильский орех",
		id: 2,
		image: {
			src: category_nuts,
			alt: "nuts",
		},
		products: [
			{
				caloric: {
					protein: 14.34,
					fat: 66.43,
					calory: 656,
					carb: 12.28,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Содержит селен, магнй и тиамин, которые снижают риск заболевания раком молочной и предстательной желез",
				id: 3,
				images: {
					src: product_brazil_nut,
					alt: "brazil nut",
				},
				price: 42.5,
				title: "Бразильский орех",
			},
			{
				caloric: {
					protein: 15.0,
					fat: 70.2,
					calory: 721,
					carb: 7.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"В грецких орехах больше белка и калорий, чем в говядине. Не употребляете мясо? Грецкий орех — идеальная замена.",
				id: 4,
				images: {
					src: product_walnut,
					alt: "walnut",
				},
				price: 18.8,
				title: "Грецкий орех",
			},
		],
		title: "Орехи",
		url: "nuts",
	},
];
