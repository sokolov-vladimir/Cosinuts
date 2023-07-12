import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
// import { findProduct } from "../../helper/findProduct";
import { Counter } from "../../common/Counter/Counter";

export function ProductPage() {
	const state = useSelector((state) => state.products.products);
	const dispatch = useDispatch();
	const { url, id } = useParams();

	// const { products } = state.find((category) => category.url === url);
	// const product = products.find((product) => product.id === +id);

	const product = state
		.find((category) => category.url === url)
		.products.find((product) => product.id === +id);

	return (
		<Container>
			<div className={styles.container}>
				<img
					className={styles.productImage}
					src={product.images.src}
					alt={product.images.alt}
				></img>
				<div className={styles.content}>
					<div className={styles.headerBox}>
						<h3>{product.title}</h3>
						<p>{product.description}</p>
					</div>
					<div className={styles.price_box}>
						<span className={styles.measurement}>Цена за 1 кг</span>
						<span className={styles.price}>
							{/* {price.toFixed(2).toLocaleString()} &#x20bd; */}
							{product.price.toFixed(2)} &#x20bd;
						</span>
					</div>
					<div className={styles.mainBox}>
						{/* <span className={styles.weight}>Вес: {product.weight} г</span> */}
						<div className={styles.cartBox}>
							<Counter
								product={product}
								// category={categoryUrl}
								category={url}
								// dispatch={dispatch}
								addStyles={styles.cartButton}
							/>
						</div>
						{/* <table>
							<tbody>
								<tr>
									<td>{constants.caloric.protein}</td>
									<td>{constants.caloric.fat}</td>
									<td>{constants.caloric.carb}</td>
									<td>{constants.caloric.calory}</td>
									<td>{constants.caloric.weight}</td>
								</tr>
								<tr>
									<td>{product.caloric.protein.toFixed(2)}</td>
									<td>{product.caloric.fat.toFixed(2)}</td>
									<td>{product.caloric.calory.toFixed(2)}</td>
									<td>{product.caloric.carb}</td>
									<td>{product.caloric.weight} г</td>
								</tr>
							</tbody>
						</table> */}
					</div>
				</div>
			</div>
		</Container>
	);
}
