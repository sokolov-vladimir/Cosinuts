import styles from "./Socials.module.scss";
import { socials } from "../../data/socials";

export function Socials({ addStyles }) {
	return (
		<div className={`${addStyles} ${styles.socials} `}>
			{socials.map((social) => (
				<a
					className={styles.socials_link}
					href={social.href}
					key={social.title}
					rel="noreferrer"
					target="_blank"
				>
					<img
						alt={social.title}
						className={styles.socials_image}
						src={social.img}
					/>
				</a>
			))}
		</div>
	);
}
