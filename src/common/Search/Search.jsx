import styles from "./Search.module.scss";
import magnifier from "./../../assets/images/icon_magnifier.svg";
import { constants } from "../../constants/constants";

export function Search() {
	return (
		<div className={styles.searchBox}>
			<input
				className={styles.searchField}
				type="search"
				placeholder={constants.placeholders.search}
			></input>
			<div className={styles.searchButton}>
				<img src={magnifier} alt="magnifier" />
			</div>
		</div>
	);
}
