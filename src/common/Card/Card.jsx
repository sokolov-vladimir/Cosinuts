import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { Button } from "../Button/Button";
import { constants } from "../../constants/constants";
import { Counter } from "../Counter/Counter";
import { useDispatch } from "react-redux";

import { addCartCount } from "../../reducer/cartSlice";

export function Card({ category, product, dispatch }) {
	const { description, images, price, title } = product;
	const productURL = `${constants.routes.catalog}/${category}/${product.id}`;
	// const dispatch = useDispatch();

	// const handleButtonClick = (product) => {
	// 	product = { ...product, url: category };
	// 	dispatch(addCartCount(product));
	// };

	return (
		<div className={styles.card}>
			<Link className={styles.image_box} state={true} to={productURL}>
				<img className={styles.image} src={images.src} alt={images.alt}></img>
			</Link>
			<div className={styles.content}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.description}>{description}</p>
				<div className={styles.price_box}>
					<span className={styles.price}>
						{price.toLocaleString()} &#x20bd;
					</span>
					<span className={styles.measurement}>Цена за 1 кг</span>
				</div>
				<div>
					<Counter product={product} dispatch={dispatch} category={category} />
					{/* <Button
						title="В корзину"
						handleClick={() => handleButtonClick(product)}
					/> */}
				</div>
			</div>
		</div>
	);
}
