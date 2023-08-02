import { useState } from "react";
import styles from "./HeaderTop.module.scss";
import call from "./../../../assets/images/icon_call.svg";
import { Burger } from "../../../common/Burger/Burger";
import { CartButton } from "./CartButton/CartButton";
import { constants } from "../../../constants/constants";
import { Entrance } from "./Entrance/Entrance";
import { Logo } from "../../../common/Logo/Logo";
import { PagesNavigation } from "../../../common/Navigation/PagesNavigation/PagesNavigation";

export function HeaderTop() {
	const [isShowMenu, setIsShowMenu] = useState(false);

	return (
		<div className={styles.header_top}>
			<div className={styles.wrapper}>
				<div className={styles.header_left}>
					<Burger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
					<Logo addStyles={styles.add_logo_styles} logoBig={false} />
					<PagesNavigation
						isShowMenu={isShowMenu}
						setIsShowMenu={setIsShowMenu}
					/>
				</div>
				<div className={styles.header_right}>
					<a
						className={styles.phone_number}
						href={`tel: ${constants.contacts.phones.mts}`}
					>
						<img src={call} alt="handset" />
						{constants.contacts.phones.mts}
					</a>
					<Entrance />
					<CartButton />
				</div>
			</div>
		</div>
	);
}
