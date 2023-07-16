import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./Search.module.scss";
import magnifier from "./../../assets/images/icon_magnifier.svg";
import { constants } from "../../constants/constants";
import { setSearchValue } from "../../reducer/productSlice";

export function Search() {
	const searchValueState = useSelector((state) => state.products.searchValue);
	const dispatch = useDispatch();
	const { pathname } = useLocation();

	useEffect(() => {
		if (
			pathname === constants.routes.catalog ||
			pathname === constants.routes.main
		) {
			dispatch(setSearchValue(""));
		}
	}, []);

	return (
		<div className={styles.searchBox}>
			<input
				className={styles.searchField}
				onChange={(e) => dispatch(setSearchValue(e.target.value))}
				placeholder={constants.placeholders.search}
				type="search"
				value={searchValueState}
			></input>

			<Link
				className={styles.searchButton}
				state={true}
				to={constants.routes.search}
			>
				<img alt="magnifier" src={magnifier} />
			</Link>
		</div>
	);
}
