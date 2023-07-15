import styles from "./Search.module.scss";
import magnifier from "./../../assets/images/icon_magnifier.svg";
import { constants } from "../../constants/constants";

export function Search() {
	return (
		<div className={styles.searchBox}>
			<input
				className={styles.searchField}
				placeholder={constants.placeholders.search}
				type="search"
			></input>
			<div className={styles.searchButton}>
				<img alt="magnifier" src={magnifier} />
			</div>
		</div>
	);
}
