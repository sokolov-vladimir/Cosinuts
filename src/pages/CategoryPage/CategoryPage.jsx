import { useDispatch, useSelector } from "react-redux";
import styles from "./CategoryPage.module.scss";
import { Button } from "../../common/Button/Button";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function CategoryPage() {
	const products = useSelector((stage) => stage.products.products);
	const dispatch = useDispatch();

	return (
		<Container>
			<Title title={constants.titles.category} />
			<div className={styles.content}>
				{products.map((category) => (
					<div className={styles.category} key={category.id}>
						<img
							className={styles.image}
							src={category.image.src}
							alt={category.image.alt}
						/>
						<h2 className={styles.title}>{category.title}</h2>
						<p className={styles.description}>{category.description}</p>
						<Button title={constants.buttons.choose} />
					</div>
				))}
			</div>
		</Container>
	);
}
