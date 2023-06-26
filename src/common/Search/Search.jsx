import styles from "./Search.module.scss";
import magnifier from "./../../assets/images/icon_magnifier.svg";

export function Search() {
	return (
		<div className={styles.searchBox}>
			<input
				className={styles.searchField}
				type="search"
				placeholder="Поиск товаров"
			></input>
			<div className={styles.searchButton}>
				<img src={magnifier} alt="magnifier" />
			</div>
		</div>
	);
}
