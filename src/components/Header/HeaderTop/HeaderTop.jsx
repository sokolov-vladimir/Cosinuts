import { Link } from "react-router-dom";
import styles from "./HeaderTop.module.scss";
import call from "./../../../assets/images/icon_call.svg";
import { CartButton } from "./CartButton/CartButton";
import { constants } from "../../../constants/constants";
import { Logo } from "../../../common/Logo/Logo";
import { PagesNavigation } from "../../../common/Navigation/PagesNavigation/PagesNavigation";

export function HeaderTop() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.headerTop}>
				<div className={styles.headerLeft}>
					<Logo logoBig={false} />
					<PagesNavigation />
				</div>
				<div className={styles.headerRight}>
					<a
						className={styles.phoneNumber}
						href={`tel: ${constants.contacts.phones.mts}`}
					>
						<img src={call} alt="handset" />
						{constants.contacts.phones.mts}
					</a>
					<Link className={styles.profile} to="/profile" state={true}>
						{constants.buttons.profile}
					</Link>
					{/* <Link className={styles.favourites} state={true} to="/favourites" >
						{constants.buttons.favourite}
					</Link> */}
					<CartButton />
				</div>
			</div>
		</div>
	);
}
