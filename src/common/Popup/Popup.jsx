import styles from "./Popup.module.scss";

export function Popup({ children, handlePopup, isActive }) {
	return (
		<div
			className={isActive ? `${styles.popup} ${styles.active}` : styles.popup}
			onClick={() => handlePopup()}
		>
			<div
				className={
					isActive ? `${styles.popup_body} ${styles.active}` : styles.popup_body
				}
				onClick={(e) => e.stopPropagation()}
			>
				{children}

				<div className={styles.popup_close} onClick={() => handlePopup()}>
					&times;
				</div>
			</div>
		</div>
	);
}
