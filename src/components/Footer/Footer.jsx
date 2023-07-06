import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { CategoryNavigation } from "../../common/Navigation/CategoryNavigation/CategoryNavigation";
import { constants } from "../../constants/constants";
import { Contacts } from "../../common/Contacts/Contacts";
import { Logo } from "../../common/Logo/Logo";
import { Socials } from "../../common/Socials/Socials";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.block} ${styles.logo}`}>
				<Logo logoBig={false} />
				<Socials addStyles={styles.socials} />
			</div>

			<div className={styles.block}>
				<Link className={styles.link} to={constants.routes.stores} state={true}>
					{constants.pages.stores}
				</Link>
				<span className={styles.stores_items}>{constants.stores.pickup}</span>
				<span className={styles.stores_items}>{constants.stores.delivery}</span>
				<span className={styles.stores_items}>
					{constants.stores.deliveryTime}
				</span>
				<span className={styles.stores_items}>
					{constants.stores.workingHours}
				</span>
			</div>

			<div className={styles.block}>
				<Link
					className={styles.link}
					to={constants.routes.catalog}
					state={true}
				>
					{constants.pages.catalog}
				</Link>
				<CategoryNavigation addStyles={styles.categoryNavigation} />
			</div>

			<div className={styles.block}>
				<Link
					className={styles.link}
					to={constants.routes.contacts}
					state={true}
				>
					{constants.pages.contacts}
				</Link>
				<Contacts />
			</div>
		</footer>
	);
}
