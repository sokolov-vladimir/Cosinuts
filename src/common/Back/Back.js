import { useNavigate } from "react-router-dom";
import styles from "./Back.module.scss";
import { constants } from "../../constants/constants";

export function Back() {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className={styles.go_back} onClick={goBack}>
			<div className={styles.arrow_box}>
				<div className={styles.arrow}></div>
			</div>
			<span className={styles.go_back_title}>{constants.common.goBack}</span>
		</div>
	);
}
