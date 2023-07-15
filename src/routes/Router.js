import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { CategoryPage } from "./../pages/CategoryPage/CategoryPage.jsx";
import { constants } from "../constants/constants";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { DeliveryPage } from "../pages/DeliveryPage/DeliveryPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { StoresPage } from "../pages/StoresPage/StoresPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { OrderPage } from "../pages/OrderPage/OrderPage";

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
			<Route path={constants.routes.stores} element={<StoresPage />} />
		</Routes>
	);
}
