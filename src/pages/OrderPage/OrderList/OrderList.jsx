import { Link } from "react-router-dom";
import styles from "./OrderList.module.scss";
import { constants } from "../../../constants/constants";

export function OrderList({ orderList, countTotalPrice }) {
	return (
		<section className={styles.order_container}>
			<h4 className={styles.order_title}>{constants.orderList.title}</h4>
			{orderList.map((product) => (
				<div className={styles.order_product} key={product.id}>
					<Link
						className={styles.product_image_box}
						state={true}
						to={`${constants.routes.catalog}/${product.url}/${product.id}`}
					>
						<img
							alt={product.images.alt}
							className={styles.product_image}
							src={product.images.src}
						></img>
					</Link>

					<div className={styles.content}>
						<span className={styles.product_title}>{product.title}</span>
						<div className={styles.price_box}>
							<span className={styles.product_weight}>
								{product.cartWeight} {constants.measurement.kilo}
							</span>
							<span className={styles.product_price}>
								{product.cartPrice.toFixed(2)} &#x20bd;
							</span>
						</div>
					</div>
				</div>
			))}
			<div className={styles.order_total_sum}>
				<span>{constants.orderList.totalSum}</span>
				<span className={styles.total_sum}>
					{countTotalPrice().toFixed(2)} &#x20bd;
				</span>
			</div>
		</section>
	);
}
