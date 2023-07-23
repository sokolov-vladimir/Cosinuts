import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.scss";
import arrow_back from "./../../assets/images/icon_arrow_back.svg";
import arrow_next from "./../../assets/images/icon_arrow_next.svg";
import { setCurrentPage } from "../../reducer/productSlice";

export function Pagination({ addStyles, products }) {
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
			startPage = 1;
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
		<div className={`${addStyles} ${styles.pagination}`}>
			<button
				className={styles.button}
				disabled={currentPage === 1}
				onClick={() => onPageChanged(currentPage - 1)}
			>
				<img alt="arrow back" src={arrow_back} />
			</button>
			<div className={styles.pages}>
				{pages.map((page, index) => {
					return (
						<span
							className={`${styles.page} ${
								currentPage === page ? styles.active : ""
							}`}
							key={index}
							onClick={() => onPageChanged(page)}
						>
							{page}
						</span>
					);
				})}
			</div>
			<button
				className={styles.button}
				disabled={currentPage === pagesCount}
				onClick={() => onPageChanged(currentPage + 1)}
			>
				<img alt="arrow next" src={arrow_next} />
			</button>
		</div>
	);
}
