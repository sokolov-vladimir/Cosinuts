import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import { Button } from "../../common/Button/Button";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function NotFoundPage() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/");
	};

	return (
		<Container>
			<Title title={constants.notFoundPage.error} />
			<span className={styles.message}>{constants.notFoundPage.message}</span>
			<Button handleClick={handleClick} title={constants.notFoundPage.return} />
		</Container>
	);
}
