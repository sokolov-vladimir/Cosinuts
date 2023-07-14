import styles from "./OrderList.module.scss";
import { Link } from "react-router-dom";
// import { OrderSection } from "../OrderSection/OrderSection";
// import { Button } from "../../../common/Button/Button";

export function OrderList({ orderList, totalPrice }) {
	return (
		<section className={styles.order_container}>
			<h4 className={styles.order_title}>Ваш заказ</h4>
			{orderList.map((product) => (
				<div className={styles.order_product} key={product.id}>
					<Link
						className={styles.product_image_box}
						state={true}
						to={`/catalog/${product.url}/${product.id}`}
					>
						<img
							className={styles.product_image}
							src={product.images.src}
							alt={product.images.alt}
						></img>
					</Link>
					<span className={styles.product_title}>{product.title}</span>
					<span className={styles.product_weight}>{product.cartWeight} кг</span>
					<span className={styles.product_price}>
						{product.cartPrice.toFixed(2)} &#x20bd;
					</span>
				</div>
			))}
			<div className={styles.order_total_sum}>
				<span>Итого к оплате:</span>
				<span className={styles.total_sum}>
					{totalPrice().toFixed(2)} &#x20bd;
				</span>
				{/* {totalPrice().toLocaleString()} &#x20bd; */}
			</div>
		</section>
	);
}
