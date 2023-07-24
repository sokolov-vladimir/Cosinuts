import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CategoryPage.module.scss";
import { Button } from "../../common/Button/Button";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function CategoryPage() {
	const productsState = useSelector((state) => state.products.products);

	return (
		<Container addStyles={styles.add_container_styles}>
			<Title title={constants.titles.category} />
			<div className={styles.container}>
				{productsState.map((category) => (
					<div className={styles.category} key={category.id}>
						<Link
							className={styles.image_box}
							state={true}
							to={`${constants.routes.catalog}/${category.url}`}
						>
							<img
								alt={category.image.alt}
								className={styles.category_image}
								src={category.image.src}
							/>
						</Link>
						<h4 className={styles.category_title}>{category.title}</h4>
						<p className={styles.category_description}>
							{category.description}
						</p>
						<Button
							isLink={true}
							title={constants.buttons.choose}
							to={`${constants.routes.catalog}/${category.url}`}
						/>
					</div>
				))}
			</div>
		</Container>
	);
}
