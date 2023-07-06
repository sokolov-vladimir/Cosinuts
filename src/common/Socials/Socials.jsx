import styles from "./Socials.module.scss";
import { socials } from "../../data/socials";

export function Socials({ addStyles }) {
	return (
		<div className={`${styles.socials} ${addStyles}`}>
			{socials.map((social) => (
				<a
					className={styles.socials_link}
					key={social.title}
					href={social.href}
					target="_blank"
					rel="noreferrer"
				>
					<img
						className={styles.socials_image}
						src={social.img}
						alt={social.title}
					/>
				</a>
			))}
		</div>
	);
}
