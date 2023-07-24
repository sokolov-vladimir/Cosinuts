import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductPage.module.scss";
import { Back } from "./../../common/Back/Back";
import { constants } from "./../../constants/constants";
import { Container } from "./../../common/Container/Container";
import { Counter } from "./../../common/Counter/Counter";
import { Popup } from "./../../common/Popup/Popup";

export function ProductPage() {
	const productsState = useSelector((state) => state.products.products);
	const dispatch = useDispatch();
	const { id, url } = useParams();
	const product = productsState
		.find((category) => category.url === url)
		.products.find((product) => product.id === +id);
	const [isActive, setIsActive] = useState(false);

	const handlePopup = () => {
		setIsActive(!isActive);
	};

	return (
		<Container addStyles={styles.add_container_styles}>
			<div className={styles.container}>
				<Back />
				<h3 className={styles.header_title_hidden}>{product.title}</h3>

				<div className={styles.wrapper}>
					<img
						alt={product.images.alt}
						className={styles.product_image}
						onClick={handlePopup}
						src={product.images.src}
					></img>

					<div className={styles.content}>
						<div className={styles.header_box}>
							<h3 className={styles.header_title}>{product.title}</h3>
							<p className={styles.header_description}>{product.description}</p>
						</div>

						<div className={styles.main_box}>
							<div className={styles.price_box}>
								<span className={styles.measurement}>
									{constants.productPage.measurement}
								</span>
								<span className={styles.price}>
									{product.price.toFixed(2)} &#x20bd;
								</span>
							</div>
							<div className={styles.cart_box}>
								<Counter category={url} product={product} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<Popup
				addStyles={
					isActive
						? `${styles.add_popup_styles} ${styles.active}`
						: styles.add_popup_styles
				}
				handlePopup={handlePopup}
				isActive={isActive}
			>
				<img alt={product.images.alt} src={product.images.src}></img>
			</Popup>
		</Container>
	);
}
