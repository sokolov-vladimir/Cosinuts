import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./ProfilePage.module.scss";
import { auth } from "../../firebase";
import { Button } from "../../common/Button/Button";
import { constants } from "../../constants/constants";
import { Container } from "../../common/Container/Container";
import { Title } from "../../common/Title/Title";

export function ProfilePage() {
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogout = async () => {
		await signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	return (
		<Container>
			<Title title={constants.titles.profile} />
			<Button
				addStyles={styles.add_button_styles}
				handleClick={handleLogout}
				title={constants.buttons.exit}
			/>
			{error && (
				<span className={styles.error}>{constants.errors.profileExit}</span>
			)}
		</Container>
	);
}
