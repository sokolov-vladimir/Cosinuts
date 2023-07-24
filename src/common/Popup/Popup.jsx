import styles from "./Popup.module.scss";

export function Popup({ addStyles, children, handlePopup, isActive }) {
	const add_body_styles = () => {
		if (addStyles) {
			return addStyles;
		} else {
			if (isActive) {
				return `${styles.active} ${styles.popup_body} `;
			} else {
				return `${styles.popup_body}`;
			}
		}
	};

	return (
		<div
			className={isActive ? `${styles.active} ${styles.popup} ` : styles.popup}
			onClick={() => handlePopup()}
		>
			<div className={add_body_styles()} onClick={(e) => e.stopPropagation()}>
				{children}
				<div className={styles.popup_close} onClick={() => handlePopup()}>
					&times;
				</div>
			</div>
		</div>
	);
}
