import styles from "./StoresPage.module.scss";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function StoresPage() {
	return (
		<Container addLogo={true}>
			<Title title={constants.pages.stores} />
		</Container>
	);
}
