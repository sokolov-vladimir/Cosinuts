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
				href={`tel: ${constants.contacts.phones.mts}`}
			>
				<img alt="handset" src={call} />
				{constants.contacts.phones.mts}
			</a>
			<a
				className={styles.contact}
				href={`tel: ${constants.contacts.phones.velcom}`}
			>
				<img alt="handset" src={call} />
				{constants.contacts.phones.velcom}
			</a>
			<a className={styles.contact} href={`mailto: ${constants.contacts.mail}`}>
				<img alt="mail" src={mail} />
				{constants.contacts.mail}
			</a>
			<div className={styles.contact}>
				<img alt="location" src={location} />
				{constants.contacts.address}
			</div>
		</div>
	);
}
