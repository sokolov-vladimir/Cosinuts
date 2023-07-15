import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { constants } from "../../constants/constants";
import { Counter } from "../Counter/Counter";

export function Card({ category, product }) {
	const { description, images, price, title } = product;
	const productURL = `${constants.routes.catalog}/${category}/${product.id}`;

	return (
		<div className={styles.card}>
			<Link className={styles.image_box} state={true} to={productURL}>
				<img alt={images.alt} className={styles.image} src={images.src}></img>
			</Link>

			<div className={styles.content}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.description}>{description}</p>
				<div className={styles.price_box}>
					<span className={styles.measurement}>
						{constants.card.measurement}
					</span>
					<span className={styles.price}>{price.toFixed(2)} &#x20bd;</span>
				</div>

				<div>
					<Counter category={category} product={product} />
				</div>
			</div>
		</div>
	);
}
