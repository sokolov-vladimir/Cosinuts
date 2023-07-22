import styles from "./Authorization.module.scss";
import { Button } from "../Button/Button";

export function Authorization({
	error,
	handleChange,
	onClickButton,
	title,
	titleButton,
	userAuthData,
}) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			<form className={styles.form}>
				{error && <span className={styles.error}>{error}</span>}
				<div>
					<input
						className={styles.input}
						id="email"
						name="email"
						onChange={handleChange}
						placeholder="Email"
						type="email"
						value={userAuthData.email}
					></input>
				</div>
				<div>
					<input
						className={styles.input}
						id="password"
						name="password"
						onChange={handleChange}
						placeholder="Password"
						type="password"
						value={userAuthData.password}
					></input>
				</div>
				<Button handleClick={onClickButton} title={titleButton} />
			</form>
		</div>
	);
}
