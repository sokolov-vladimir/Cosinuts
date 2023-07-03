import styles from "./AboutPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function AboutPage() {
	return (
		<Container addLogo={true}>
			<Title title={constants.pages.about} />
		</Container>
	);
}
