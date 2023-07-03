import styles from "./CatalogPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function CatalogPage() {
	return (
		<Container>
			<Title title={constants.titles.catalog} />
		</Container>
	);
}
