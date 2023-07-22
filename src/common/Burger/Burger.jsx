import styles from "./Burger.module.scss";

export function Burger({ isShowMenu, setIsShowMenu }) {
	return (
		<div className={styles.burger} onClick={() => setIsShowMenu(!isShowMenu)}>
			<span
				className={
					isShowMenu
						? `${styles.burger_line} ${styles.cross}`
						: `${styles.burger_line}`
				}
			></span>
		</div>
	);
}
