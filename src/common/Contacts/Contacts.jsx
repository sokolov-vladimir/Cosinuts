import styles from "./Contacts.module.scss";
import call from "./../../assets/images/icon_call.svg";
import location from "./../../assets/images/icon_location.svg";
import mail from "./../../assets/images/icon_mail.svg";
import { constants } from "../../constants/constants";

export function Contacts() {
	return (
		<div className={styles.container}>
			<a
				className={styles.contact}
				href={`tel: ${constants.contacts.phones.beeline}`}
			>
				<img src={call} alt="handset" />
				{constants.contacts.phones.beeline}
			</a>
			<a
				className={styles.contact}
				href={`tel: ${constants.contacts.phones.megaphone}`}
			>
				<img src={call} alt="handset" />
				{constants.contacts.phones.megaphone}
			</a>
			<a
				className={styles.contact}
				href={`mailto: ${constants.contacts.phones.megaphone}`}
			>
				<img src={mail} alt="mail" />
				{constants.contacts.mail}
			</a>
			<div className={styles.contact}>
				<img src={location} alt="location" />
				{constants.contacts.address}
			</div>
		</div>
	);
}
