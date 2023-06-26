import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import { constants } from "../../constants/constants";

export function NotFoundPage() {
	return (
		<div>
			<span>Такой страницы не существует.</span>
			<span>
				Перейти на <Link to={constants.routes.main}>Главную страницу</Link>
			</span>
		</div>
	);
}
