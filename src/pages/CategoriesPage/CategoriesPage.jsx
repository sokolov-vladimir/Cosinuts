import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoriesPage.module.scss";
import { Button } from "../../common/Button/Button";
import { Container } from "../../common/Container/Container";
import { Title } from "./../../common/Title/Title";

export function CategoriesPage() {
	const products = useSelector((stage) => stage.products.products);
	const dispatch = useDispatch();

	// console.log(products);
	return (
		<Container>
			<Title title="Категории товаров" />
			<div className={styles.content}>
				{products.map((category) => (
					<div className={styles.category} key={category.id}>
						<img className={styles.image} src={category.image.src} />
						<h2 className={styles.title}>{category.title}</h2>
						<p className={styles.description}>{category.description}</p>
						<Button title="Выбрать" />
					</div>
				))}
			</div>
		</Container>
	);
}
