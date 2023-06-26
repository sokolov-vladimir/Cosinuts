import styles from "./HeaderBottom.module.scss";
import bannerBig from "./../../../assets/images/banner_big.svg";
import bannerSmall from "./../../../assets/images/banner_small.svg";
import title from "./../../../assets/images/icon_main_title.svg";
import { constants } from "../../../constants/constants";
import { Search } from "../../../common/Search/Search";

export function HeaderBottom() {
	return (
		<div className={styles.headerBottom}>
			<div className={styles.content}>
				<img className={styles.title} src={title} alt="title" />
				<p className={styles.text}>{constants.texts.main}</p>
				<Search />
			</div>
			<img className={styles.image} src={bannerBig} alt="banner" />
		</div>
	);
}
