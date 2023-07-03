import styles from "./ContactsPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function ContactsPage() {
	return (
		<Container addLogo={true}>
			<Title title={constants.pages.contacts} />
		</Container>
	);
}
