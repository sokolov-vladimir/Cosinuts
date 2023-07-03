import styles from "./DeliveryPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function DeliveryPage() {
	return (
		<Container addLogo={true}>
			<Title title={constants.pages.delivery} />
		</Container>
	);
}
