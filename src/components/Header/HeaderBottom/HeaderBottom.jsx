import styles from "./HeaderBottom.module.scss";
import banner_big from "./../../../assets/images/banner_big.svg";
import banner_small from "./../../../assets/images/banner_small.svg";
import title from "./../../../assets/images/icon_main_title.svg";
import { constants } from "../../../constants/constants";
import { Search } from "../../../common/Search/Search";

export function HeaderBottom() {
	return (
		<div className={styles.header_bottom}>
			<div className={styles.content}>
				<img alt="title" className={styles.title} src={title} />
				<p className={styles.text}>{constants.texts.main}</p>
				<img
					alt="banner_small"
					className={styles.banner_small}
					src={banner_small}
				/>
				<Search addStyles={styles.add_search_styles} />
			</div>
			<img alt="banner_big" className={styles.banner_big} src={banner_big} />
		</div>
	);
}
