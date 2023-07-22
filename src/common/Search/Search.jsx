import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./Search.module.scss";
import magnifier from "./../../assets/images/icon_magnifier.svg";
import { constants } from "../../constants/constants";
import { setSearchValue } from "../../reducer/productSlice";

export function Search({ addStyles }) {
	const searchValueState = useSelector((state) => state.products.searchValue);
	const dispatch = useDispatch();

	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handlePressEnterKey = (event) => {
		if (event.keyCode === 13) {
			navigate(constants.routes.search, { state: true });
		}
	};

	useEffect(() => {
		if (
			pathname === constants.routes.catalog ||
			pathname === constants.routes.main
		) {
			dispatch(setSearchValue(""));
		}
	}, []);

	return (
		<div className={`${addStyles} ${styles.search_box}`}>
			<input
				className={styles.search_field}
				onChange={(e) => dispatch(setSearchValue(e.target.value))}
				onKeyDown={handlePressEnterKey}
				placeholder={constants.placeholders.search}
				type="search"
				value={searchValueState}
			></input>

			<Link
				className={styles.search_button}
				state={true}
				to={constants.routes.search}
			>
				<img alt="magnifier" src={magnifier} />
			</Link>
		</div>
	);
}
