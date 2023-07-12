import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CategoryPage.module.scss";
import { Button } from "../../common/Button/Button";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function CategoryPage() {
	const stage = useSelector((stage) => stage.products.products);

	return (
		<Container>
			<Title title={constants.titles.category} />
			<div className={styles.content}>
				{stage.map((category) => (
					<div className={styles.category} key={category.id}>
						<Link
							className={styles.image_box}
							to={`${constants.routes.catalog}/${category.url}`}
							state={true}
						>
							<img
								className={styles.image}
								src={category.image.src}
								alt={category.image.alt}
							/>
						</Link>
						<h4 className={styles.title}>{category.title}</h4>
						<p className={styles.description}>{category.description}</p>
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
