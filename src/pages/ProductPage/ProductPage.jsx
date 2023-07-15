import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Counter } from "../../common/Counter/Counter";

export function ProductPage() {
	const productsState = useSelector((state) => state.products.products);
	const dispatch = useDispatch();
	const { id, url } = useParams();

	const product = productsState
		.find((category) => category.url === url)
		.products.find((product) => product.id === +id);

	return (
		<Container>
			<div className={styles.container}>
				<img
					alt={product.images.alt}
					className={styles.productImage}
					src={product.images.src}
				></img>
				<div className={styles.content}>
					<div className={styles.headerBox}>
						<h3>{product.title}</h3>
						<p>{product.description}</p>
					</div>
					<div className={styles.price_box}>
						<span className={styles.measurement}>
							{constants.productPage.measurement}
						</span>
						<span className={styles.price}>
							{product.price.toFixed(2)} &#x20bd;
						</span>
					</div>
					<div className={styles.mainBox}>
						<div className={styles.cartBox}>
							<Counter
								addStyles={styles.cartButton}
								category={url}
								product={product}
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
