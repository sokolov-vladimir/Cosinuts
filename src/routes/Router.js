import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { CategoryPage } from "./../pages/CategoryPage/CategoryPage.jsx";
import { constants } from "../constants/constants";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { DeliveryPage } from "../pages/DeliveryPage/DeliveryPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { SearchPage } from "../pages/SearchPage/SearchPage";
import { StoresPage } from "../pages/StoresPage/StoresPage";

export function Router() {
	return (
		<Routes>
			<Route path={constants.routes.about} element={<AboutPage />} />
			<Route path={constants.routes.cart} element={<CartPage />} />
			<Route path={constants.routes.catalog} element={<CatalogPage />} />
			<Route path={constants.routes.contacts} element={<ContactsPage />} />
			<Route path={constants.routes.delivery} element={<DeliveryPage />} />
			<Route path={constants.routes.main} element={<CategoryPage />} />
			<Route path={constants.routes.notFound} element={<NotFoundPage />} />
			<Route path={constants.routes.order} element={<OrderPage />} />
			<Route path={constants.routes.product} element={<ProductPage />} />
			<Route path={constants.routes.products} element={<CatalogPage />} />
			<Route path={constants.routes.search} element={<SearchPage />} />
			<Route path={constants.routes.stores} element={<StoresPage />} />
		</Routes>
	);
}
