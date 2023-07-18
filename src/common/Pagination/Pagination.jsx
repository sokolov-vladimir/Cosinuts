import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.scss";
import { constants } from "../../constants/constants";
import { setCurrentPage } from "../../reducer/productSlice";

export function Pagination({ products }) {
	const { currentPage, pageSize } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	let startPage = 1;
	let endPage = 5;
	let productsCount = products.length;
	let pagesCount = Math.ceil(productsCount / pageSize);

	if (currentPage + 2 >= endPage) {
		startPage = currentPage - 2;
		endPage = currentPage + 2;
	}

	if (currentPage === pagesCount || endPage > pagesCount) {
		if (pagesCount >= 5) {
			startPage = pagesCount - 4;
		} else {
			startPage = pagesCount;
		}
		endPage = pagesCount;
	}

	const pages = useMemo(
		() => [...Array(endPage + 1 - startPage).keys()].map((i) => startPage + i),
		[endPage, startPage]
	);

	const onPageChanged = (pageNumber) => {
		dispatch(setCurrentPage(pageNumber));
	};

	return (
		<div className={styles.pagination}>
			<button
				className={styles.button}
				disabled={currentPage === 1}
				onClick={() => onPageChanged(1)}
			>
				{constants.buttons.start}
			</button>
			<button
				className={styles.button}
				disabled={currentPage === 1}
				onClick={() => onPageChanged(currentPage - 1)}
			>
				{constants.buttons.previous}
			</button>
			{pages.map((page, index) => {
				return (
					<div
						key={index}
						className={`${styles.pageList} ${
							currentPage === page ? styles.active : ""
						}`}
						onClick={() => onPageChanged(page)}
					>
						{page}
					</div>
				);
			})}
			<button
				className={styles.button}
				disabled={currentPage === pagesCount}
				onClick={() => onPageChanged(currentPage + 1)}
			>
				{constants.buttons.next}
			</button>
			<button
				className={styles.button}
				disabled={currentPage === pagesCount}
				onClick={() => onPageChanged(pagesCount)}
			>
				{constants.buttons.end}
			</button>
		</div>
	);
}
