import category_fruits from "./../assets/images/categories/fruits.jpg";
import category_nuts from "./../assets/images/categories/nuts.jpg";
import category_candies from "./../assets/images/categories/candies.jpg";
import category_sweets from "./../assets/images/categories/sweets.jpg";

import fruits_apricot_dried from "./../assets/images/products/fruits/apricot_dried.jpg";
import fruits_raisin_malar from "./../assets/images/products/fruits/raisin_malar.jpg";
import fruits_date_cabcab from "./../assets/images/products/fruits/date_cabcab.jpg";
import fruits_banana_chips from "./../assets/images/products/fruits/banana_chips.jpg";
import fruits_date_caep from "./../assets/images/products/fruits/date_caep.jpg";
import fruits_raisin_thompson from "./../assets/images/products/fruits/raisin_thompson.jpg";
import fruits_raisin_gold from "./../assets/images/products/fruits/raisin_gold.jpg";
import fruits_rosehip from "./../assets/images/products/fruits/rosehip.jpg";
import fruits_figs_lerida from "./../assets/images/products/fruits/figs_lerida.jpg";
import fruits_prunes from "./../assets/images/products/fruits/prunes.jpg";
import fruits_apple_dried from "./../assets/images/products/fruits/apple_dried.jpg";
import fruits_figs_baglama from "./../assets/images/products/fruits/figs_baglama.jpg";

import nuts_brazil_nut from "./../assets/images/products/nuts/brazil_nut.jpg";
import nuts_walnut from "./../assets/images/products/nuts/walnut.jpg";
import nuts_almond from "./../assets/images/products/nuts/almond.jpg";
import nuts_peanuts_solted from "./../assets/images/products/nuts/peanuts_solted.jpg";
import nuts_cashew_fried from "./../assets/images/products/nuts/cashew_fried.jpg";
import nuts_peanuts_raw from "./../assets/images/products/nuts/peanuts_raw.jpg";
import nuts_beans_fried from "./../assets/images/products/nuts/beans_fried.jpg";
import nuts_hazelnuts from "./../assets/images/products/nuts/hazelnuts.jpg";
import nuts_pine_nut from "./../assets/images/products/nuts/pine_nut.jpg";
import nuts_peanuts_not_peeled from "./../assets/images/products/nuts/peanuts_not_peeled.jpg";
import nuts_pecan from "./../assets/images/products/nuts/pecan.jpg";
import nuts_pistachios from "./../assets/images/products/nuts/pistachios.jpg";

import candies_cranberry_dried from "./../assets/images/products/candies/cranberry_dried.jpg";
import candies_pineapple_cylinder from "./../assets/images/products/candies/pineapple_cylinder.jpg";
import candies_peach_dried from "./../assets/images/products/candies/peach_dried.jpg";
import candies_pineapple_stick from "./../assets/images/products/candies/pineapple_stick.jpg";
import candies_ginger_dried from "./../assets/images/products/candies/ginger_dried.jpg";
import candies_papaya_dehydrated from "./../assets/images/products/candies/papaya_dehydrated.jpg";
import candies_pineapple_leaves from "./../assets/images/products/candies/pineapple_leaves.jpg";
import candies_pomelo_dehydrated from "./../assets/images/products/candies/pomelo_dehydrated.jpg";
import candies_mango_dehydrated from "./../assets/images/products/candies/mango_dehydrated.jpg";
import candies_coconut_dehydrated from "./../assets/images/products/candies/coconut_dehydrated.jpg";
import candies_kumquat_dehydrated from "./../assets/images/products/candies/kumquat_dehydrated.jpg";
import candies_pineapple_cube from "./../assets/images/products/candies/pineapple_cube.jpg";

import sweets_peanuts_chocolate from "./../assets/images/products/sweets/peanuts_chocolate.jpg";
import sweets_hazelnut_chocolate from "./../assets/images/products/sweets/hazelnut_chocolate.jpg";
import sweets_raisins_chocolate from "./../assets/images/products/sweets/raisins_chocolate.jpg";
import sweets_almond_chocolate from "./../assets/images/products/sweets/almond_chocolate.jpg";
import sweets_peanuts_chocolate_white from "./../assets/images/products/sweets/peanuts_chocolate_white.jpg";
import sweets_almond_chocolate_white from "./../assets/images/products/sweets/almond_chocolate_white.jpg";
import sweets_cashews_chocolate from "./../assets/images/products/sweets/cashews_chocolate.jpg";
import sweets_cashews_chocolate_white from "./../assets/images/products/sweets/cashews_chocolate_white.jpg";
import sweets_bananas_chocolate from "./../assets/images/products/sweets/bananas_chocolate.jpg";
import sweets_apricots_chocolate from "./../assets/images/products/sweets/apricots_chocolate.jpg";
import sweets_prunes_chocolate from "./../assets/images/products/sweets/prunes_chocolate.jpg";
import sweets_cranberry_chocolate from "./../assets/images/products/sweets/cranberry_chocolate.jpg";

export const initialState = [
	{
		description: "Изюм, курага, чернослив, финики, инжир",
		id: 1,
		image: {
			src: category_fruits,
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
					"В сухофрукте есть витамины А, В₁, В₂, В₅, С, РР, минералы (железо, йод, фосфор, натрий, магний), глюкоза, сахароза и фруктоза.",
				id: 1,
				images: {
					src: fruits_apricot_dried,
					alt: "Курага",
				},
				price: 24.5,
				title: "Курага",
			},
			{
				caloric: {
					protein: 3.5,
					fat: 0.4,
					calory: 254,
					carb: 67.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"В изюме содержатся: витамины B1, B2, B5, B6, PP, К1; бетаин и биофлавониды; железо, йод и калий.",
				id: 2,
				images: {
					src: fruits_raisin_malar,
					alt: "Виноград сушеный МАЛАЯР",
				},
				price: 8.8,
				title: "Виноград сушеный МАЛАЯР",
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
					"В финиках высокое содержание минералов: медь, железо, магний, цинк, марганец, калий, кальций, фтор и другие.",
				id: 3,
				images: {
					src: fruits_date_cabcab,
					alt: "Финики сушеные КАБКАБ",
				},
				price: 5.9,
				title: "Финики сушеные КАБКАБ",
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
					"Банановые чипсы - это удобный и сытный снек, который можно взять с собой в дорогу или на работу.",
				id: 4,
				images: {
					src: fruits_banana_chips,
					alt: "Банановые чипсы",
				},
				price: 14.9,
				title: "Банановые чипсы",
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
					"Пектин и пищевые волокна, входящие в состав фиников, снижают риск некоторых раковых заболеваний.",
				id: 5,
				images: {
					src: fruits_date_caep,
					alt: "Финики сушеные САЕР",
				},
				price: 5.5,
				title: "Финики сушеные САЕР",
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
					"Натуральный продукт Без ГМО, транс-жиров, химикатов и консервантов, к тому же в нём совсем нет косточек.",
				id: 6,
				images: {
					src: fruits_raisin_thompson,
					alt: "Виноград сушеный THOMPSON",
				},
				price: 14.5,
				title: "Виноград сушеный THOMPSON",
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
					"В изюме содержатся полезные витамины и микроэлементы: магний, железо и кальций, витамины группы В, А, С. ",
				id: 7,
				images: {
					src: fruits_raisin_gold,
					alt: "Виноград сушеный GOLD",
				},
				price: 19.5,
				title: "Виноград сушеный GOLD",
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
					"Плоды шиповника по количественному содержанию и разнообразию витаминов значительно превосходит другие растения.",
				id: 8,
				images: {
					src: fruits_rosehip,
					alt: "Шиповник сушеный",
				},
				price: 11.5,
				title: "Шиповник сушеный",
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
					"Инжир - это кладовая полезных фитонутриентов, антиоксидантов, натуральных сахаров и растворимых волокон.",
				id: 9,
				images: {
					src: fruits_figs_lerida,
					alt: "Инжир сушеный Lerida",
				},
				price: 26.0,
				title: "Инжир сушеный Lerida",
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
					"В составе фрукта много полезных для организма веществ: витамины, микроэлементы, глюкоза, сахароза и фруктоза",
				id: 10,
				images: {
					src: fruits_prunes,
					alt: "Чернослив без кострочки",
				},
				price: 10.9,
				title: "Чернослив без кострочки",
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
					"В яблоках много витаминов и клетчатки. Этот тот самый десерт, против которого не будет возражать ни одна мама.",
				id: 11,
				images: {
					src: fruits_apple_dried,
					alt: "Яблоко сушеное",
				},
				price: 7.0,
				title: "Яблоко сушеное",
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
					"Употребление инжира рекомендуется при астме, кашле, бронхите, сексуальных дисфункциях, запорах, нарушениях работы ЖКТ.",
				id: 12,
				images: {
					src: fruits_figs_baglama,
					alt: "Инжир сушеный BAGLAMA",
				},
				price: 36.0,
				title: "Инжир сушеный BAGLAMA",
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
				id: 13,
				images: {
					src: nuts_brazil_nut,
					alt: "Бразильский орех",
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
					"В грецких орехах больше белка и калорий, чем в говядине. Не употребляете мясо? Грецкий орех - идеальная замена.",
				id: 14,
				images: {
					src: nuts_walnut,
					alt: "Грецкий орех",
				},
				price: 18.8,
				title: "Грецкий орех",
			},
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
					"Миндаль используют для изготовления кондитерских изделий: печенья, тортов, карамельных начинок.",
				id: 15,
				images: {
					src: nuts_almond,
					alt: "Миндаль очищенный",
				},
				price: 34.0,
				title: "Миндаль очищенный",
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
					"Солёные орешки — универсальный перекус, который нравится и взрослым, и детям.",
				id: 16,
				images: {
					src: nuts_peanuts_solted,
					alt: "Арахис соленый",
				},
				price: 8.9,
				title: "Арахис соленый",
			},
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
				id: 17,
				images: {
					src: nuts_cashew_fried,
					alt: "Кешью жареный",
				},
				price: 28.9,
				title: "Кешью жареный",
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
					"Орех защищает организм от развития атеросклероза, рассеянного склероза и неправильного кроветворения.",
				id: 18,
				images: {
					src: nuts_peanuts_raw,
					alt: "Арахис сырой",
				},
				price: 8.9,
				title: "Арахис сырой",
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
					"Содержит селен, магнй и тиамин, которые снижают риск заболевания раком молочной и предстательной желез",
				id: 19,
				images: {
					src: nuts_beans_fried,
					alt: "Бобы жареные",
				},
				price: 14.9,
				title: "Бобы жареные",
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
					"Орешки - это универсальный перекус, который нравится и взрослым, и детям.",
				id: 20,
				images: {
					src: nuts_hazelnuts,
					alt: "Фундук очищеный",
				},
				price: 29.2,
				title: "Фундук очищеный",
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
					"Орех защищает организм от развития атеросклероза, рассеянного склероза и неправильного кроветворения.",
				id: 21,
				images: {
					src: nuts_pine_nut,
					alt: "Орехи кедровые",
				},
				price: 89.0,
				title: "Орехи кедровые",
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
					"Содержит селен, магнй и тиамин, которые снижают риск заболевания раком молочной и предстательной желез",
				id: 22,
				images: {
					src: nuts_peanuts_not_peeled,
					alt: "Арахис неочищенный",
				},
				price: 11.2,
				title: "Арахис неочищенный",
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
					"Орешки - это универсальный перекус, который нравится и взрослым, и детям.",
				id: 23,
				images: {
					src: nuts_pecan,
					alt: "Орех Пекана",
				},
				price: 56.0,
				title: "Орех Пекана",
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
					"Орех защищает организм от развития атеросклероза, рассеянного склероза и неправильного кроветворения.",
				id: 24,
				images: {
					src: nuts_pistachios,
					alt: "Фисташки жареные",
				},
				price: 49.2,
				title: "Фисташки жареные",
			},
		],
		title: "Орехи",
		url: "nuts",
	},
	{
		description: "Ананас, папайя, имбирь, клюква, манго, помело",
		id: 3,
		image: {
			src: category_candies,
			alt: "candies",
		},
		products: [
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
					"Помимо важнейшего витамина С, конфета содержит витамины B1, B2, B5, B6, PP, К1.",
				id: 25,
				images: {
					src: candies_cranberry_dried,
					alt: "Клюква сушеная с сахаром",
				},
				price: 29.0,
				title: "Клюква сушеная с сахаром",
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
					"Изобилие магния существенно укрепит нервную систему, избавив от последствий стрессов и эмоциональных перегрузок.",
				id: 26,
				images: {
					src: candies_pineapple_cylinder,
					alt: "Ананас с сахаром ЦИЛИНДРИКИ",
				},
				price: 19.5,
				title: "Ананас с сахаром ЦИЛИНДРИКИ",
			},
			{
				caloric: {
					protein: 3.5,
					fat: 0.4,
					calory: 254,
					carb: 67.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"В мякоти присутствуют минеральные вещества: железо, калий, медь, кальций, марганец, йод.",
				id: 27,
				images: {
					src: candies_peach_dried,
					alt: "Персик сушеный с сахаром",
				},
				price: 47.0,
				title: "Персик сушеный с сахаром",
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
					"Помимо важнейшего витамина С, конфета содержит витамины B1, B2, B5, B6, PP, К1.",
				id: 28,
				images: {
					src: candies_pineapple_stick,
					alt: "Ананас с сахаром ПАЛОЧКИ",
				},
				price: 19.5,
				title: "Ананас с сахаром ПАЛОЧКИ",
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
					"Изобилие магния существенно укрепит нервную систему, избавив от последствий стрессов и эмоциональных перегрузок.",
				id: 29,
				images: {
					src: candies_ginger_dried,
					alt: "Имбирь сушеный с сахаром",
				},
				price: 21.5,
				title: "Имбирь сушеный с сахаром",
			},
			{
				caloric: {
					protein: 3.5,
					fat: 0.4,
					calory: 254,
					carb: 67.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"В мякоти присутствуют минеральные вещества: железо, калий, медь, кальций, марганец, йод.",
				id: 30,
				images: {
					src: candies_pineapple_cube,
					alt: "Ананас с сахаром КУБИКИ",
				},
				price: 19.5,
				title: "Ананас с сахаром КУБИКИ",
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
					"Помимо важнейшего витамина С, конфета содержит витамины B1, B2, B5, B6, PP, К1.",
				id: 31,
				images: {
					src: candies_papaya_dehydrated,
					alt: "Папайя с сахаром",
				},
				price: 19.8,
				title: "Папайя с сахаром",
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
					"Изобилие магния существенно укрепит нервную систему, избавив от последствий стрессов и эмоциональных перегрузок.",
				id: 32,
				images: {
					src: candies_pineapple_leaves,
					alt: "Ананас с сахаром ЛИСТИКИ",
				},
				price: 19.5,
				title: "Ананас с сахаром ЛИСТИКИ",
			},
			{
				caloric: {
					protein: 3.5,
					fat: 0.4,
					calory: 254,
					carb: 67.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"В мякоти присутствуют минеральные вещества: железо, калий, медь, кальций, марганец, йод.",
				id: 33,
				images: {
					src: candies_pomelo_dehydrated,
					alt: "Помело с сахаром",
				},
				price: 16.4,
				title: "Помело с сахаром",
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
					"Помимо важнейшего витамина С, конфета содержит витамины B1, B2, B5, B6, PP, К1.",
				id: 34,
				images: {
					src: candies_mango_dehydrated,
					alt: "Манго с сахаром",
				},
				price: 25,
				title: "Манго с сахаром",
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
					"Изобилие магния существенно укрепит нервную систему, избавив от последствий стрессов и эмоциональных перегрузок.",
				id: 35,
				images: {
					src: candies_coconut_dehydrated,
					alt: "Кокос с сахаром",
				},
				price: 35,
				title: "сахаром",
			},
			{
				caloric: {
					protein: 3.5,
					fat: 0.4,
					calory: 254,
					carb: 67.5,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"В мякоти присутствуют минеральные вещества: железо, калий, медь, кальций, марганец, йод.",
				id: 36,
				images: {
					src: candies_kumquat_dehydrated,
					alt: "Кумкат с сахаром",
				},
				price: 17.8,
				title: "Кумкат с сахаром",
			},
		],
		title: "Цукаты",
		url: "candies",
	},
	{
		description: "Драже, бананы, курага, чернослив, клюква",
		id: 4,
		image: {
			src: category_sweets,
			alt: "sweets",
		},
		products: [
			{
				caloric: {
					protein: 17.0,
					fat: 43.5,
					calory: 260,
					carb: 32.8,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Берите пакетик с собой на работу, кушайте по чуть-чуть - и чувство голода больше никогда не будет вас отвлекать.",
				id: 37,
				images: {
					src: sweets_peanuts_chocolate,
					alt: "Арахис в шоколадной глазури",
				},
				price: 16.5,
				title: "Арахис в шоколадной глазури",
			},
			{
				caloric: {
					protein: 10,
					fat: 47.86,
					calory: 613,
					carb: 35.74,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Шоколад богат стеариновой кислотой, которая очищает сосуды и нормализует функции тромбоцитов.",
				id: 38,
				images: {
					src: sweets_hazelnut_chocolate,
					alt: "Фундук в шоколадной глазури",
				},
				price: 27.9,
				title: "Фундук в шоколадной глазури",
			},
			{
				caloric: {
					protein: 4.6,
					fat: 18.5,
					calory: 440,
					carb: 65.2,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Даже небольшая порция этой сладости обеспечит каждого зарядом бодрости и насытит организм витаминами.",
				id: 39,
				images: {
					src: sweets_raisins_chocolate,
					alt: "Изюм в шоколадной глазури",
				},
				price: 18.5,
				title: "Изюм в шоколадной глазури",
			},

			{
				caloric: {
					protein: 17.0,
					fat: 43.5,
					calory: 260,
					carb: 32.8,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Берите пакетик с собой на работу, кушайте по чуть-чуть - и чувство голода больше никогда не будет вас отвлекать.",
				id: 40,
				images: {
					src: sweets_almond_chocolate,
					alt: "Миндаль в шоколадной глазури",
				},
				price: 27.9,
				title: "Миндаль в шоколадной глазури",
			},
			{
				caloric: {
					protein: 10,
					fat: 47.86,
					calory: 613,
					carb: 35.74,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Шоколад богат стеариновой кислотой, которая очищает сосуды и нормализует функции тромбоцитов.",
				id: 41,
				images: {
					src: sweets_peanuts_chocolate_white,
					alt: "Арахис в белой шоколадной глазури",
				},
				price: 16.5,
				title: "Арахис в белой шоколадной глазури",
			},
			{
				caloric: {
					protein: 4.6,
					fat: 18.5,
					calory: 440,
					carb: 65.2,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Даже небольшая порция этой сладости обеспечит каждого зарядом бодрости и насытит организм витаминами.",
				id: 42,
				images: {
					src: sweets_almond_chocolate_white,
					alt: "Миндаль в белой шоколадной глазури",
				},
				price: 27.9,
				title: "Миндаль в белой шоколадной глазури",
			},

			{
				caloric: {
					protein: 17.0,
					fat: 43.5,
					calory: 260,
					carb: 32.8,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Берите пакетик с собой на работу, кушайте по чуть-чуть - и чувство голода больше никогда не будет вас отвлекать.",
				id: 43,
				images: {
					src: sweets_cashews_chocolate,
					alt: "Кешью в шоколадной глазури",
				},
				price: 27.9,
				title: "Кешью в шоколадной глазури",
			},
			{
				caloric: {
					protein: 10,
					fat: 47.86,
					calory: 613,
					carb: 35.74,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Шоколад богат стеариновой кислотой, которая очищает сосуды и нормализует функции тромбоцитов.",
				id: 44,
				images: {
					src: sweets_cashews_chocolate_white,
					alt: "Кешью в белой шоколадной глазури",
				},
				price: 27.9,
				title: "Кешью в белой шоколадной глазури",
			},
			{
				caloric: {
					protein: 4.6,
					fat: 18.5,
					calory: 440,
					carb: 65.2,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Даже небольшая порция этой сладости обеспечит каждого зарядом бодрости и насытит организм витаминами.",
				id: 45,
				images: {
					src: sweets_bananas_chocolate,
					alt: "Банан в шоколадной глазури",
				},
				price: 16.5,
				title: "Банан в шоколадной глазури",
			},

			{
				caloric: {
					protein: 17.0,
					fat: 43.5,
					calory: 260,
					carb: 32.8,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Берите пакетик с собой на работу, кушайте по чуть-чуть - и чувство голода больше никогда не будет вас отвлекать.",
				id: 46,
				images: {
					src: sweets_apricots_chocolate,
					alt: "Курага в шоколадной глазури",
				},
				price: 16.5,
				title: "Курага в шоколадной глазури",
			},
			{
				caloric: {
					protein: 10,
					fat: 47.86,
					calory: 613,
					carb: 35.74,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Шоколад богат стеариновой кислотой, которая очищает сосуды и нормализует функции тромбоцитов.",
				id: 47,
				images: {
					src: sweets_prunes_chocolate,
					alt: "Чернослив в шоколадной глазури",
				},
				price: 17.5,
				title: "Чернослив в шоколадной глазури",
			},
			{
				caloric: {
					protein: 4.6,
					fat: 18.5,
					calory: 440,
					carb: 65.2,
				},
				cartCount: 0,
				cartPrice: 0,
				cartWeight: 0,
				description:
					"Даже небольшая порция этой сладости обеспечит каждого зарядом бодрости и насытит организм витаминами.",
				id: 48,
				images: {
					src: sweets_cranberry_chocolate,
					alt: "Клюква в шоколадной глазури",
				},
				price: 22.5,
				title: "Клюква в шоколадной глазури",
			},
		],
		title: "Сладости",
		url: "sweets",
	},
];
