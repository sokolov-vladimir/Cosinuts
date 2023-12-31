import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Entrance.module.scss";
import profile from "./../../../../assets/images/icon_profile.svg";
import { auth } from "../../../../firebase";
import { Authorization } from "../../../../common/Authorization/Authorization";
import { Popup } from "../../../../common/Popup/Popup";
import { constants } from "../../../../constants/constants";

export function Entrance() {
	const [isActive, setIsActive] = useState(false);
	const [isSignup, setIsSignup] = useState(false);
	const [isLogin, setIsLogin] = useState(false);
	const [error, setError] = useState("");
	const [userAuthData, setUserAuthData] = useState({
		email: "tomas@gmail.com",
		password: "123456",
	});
	const navigate = useNavigate();

	const changeIsSignup = () => {
		setIsSignup(!isSignup);
	};

	const cleanError = () => {
		setError("");
	};

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setUserAuthData({ ...userAuthData, [name]: value });
	};

	const handlePopup = () => {
		setIsActive(!isActive);
	};

	const onLogin = async (e) => {
		e.preventDefault();
		await signInWithEmailAndPassword(
			auth,
			userAuthData.email,
			userAuthData.password
		)
			.then((response) => {
				setIsActive(!isActive);
				navigate(constants.routes.profile, { state: true });
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				userAuthData.email,
				userAuthData.password
			);
			navigate(constants.routes.profile, { state: true });
			setIsActive(!isActive);
			console.log(response);
		} catch (err) {
			setError(err.message);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			user ? setIsLogin(true) : setIsLogin(false);
		});
	}, []);

	return (
		<>
			{!isLogin ? (
				<div
					className={styles.entrance}
					onClick={() => {
						handlePopup();
						cleanError();
					}}
				>
					<span className={styles.title}>{constants.entrance.enter}</span>
				</div>
			) : (
				<Link
					className={styles.entrance}
					state="true"
					to={constants.routes.profile}
				>
					<img alt="profile" className={styles.icon} src={profile} />
				</Link>
			)}

			<Popup handlePopup={handlePopup} isActive={isActive}>
				<Authorization
					error={error}
					handleChange={handleChange}
					onClickButton={isSignup ? onLogin : onSubmit}
					title={
						isSignup
							? constants.entrance.authEnter
							: constants.entrance.register
					}
					titleButton={
						isSignup ? constants.buttons.enter : constants.buttons.registration
					}
					userAuthData={userAuthData}
				/>

				{isSignup ? (
					<div>
						<span
							className={styles.action_select}
							onClick={() => {
								changeIsSignup();
								cleanError();
							}}
						>
							{constants.entrance.register}
						</span>
					</div>
				) : (
					<div>
						<span
							className={styles.action_select}
							onClick={() => {
								changeIsSignup();
								cleanError();
							}}
						>
							{constants.entrance.useAccount}
						</span>
					</div>
				)}
			</Popup>
		</>
	);
}
