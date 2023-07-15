import styles from "./HeaderBottom.module.scss";
import banner_big from "./../../../assets/images/banner_big.svg";
import banner_small from "./../../../assets/images/banner_small.svg";
import title from "./../../../assets/images/icon_main_title.svg";
import { constants } from "../../../constants/constants";
import { Search } from "../../../common/Search/Search";

export function HeaderBottom() {
	return (
		<div className={styles.headerBottom}>
			<div className={styles.content}>
				<img alt="title" className={styles.title} src={title} />
				<p className={styles.text}>{constants.texts.main}</p>
				<Search />
			</div>
			<img className={styles.image} src={banner_big} alt="banner" />
		</div>
	);
}
