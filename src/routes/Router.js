import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { CatalogPage } from "../pages/CatalogPage/CatalogPage";
import { CategoriesPage } from "../pages/CategoriesPage/CategoriesPage";
import { constants } from "../constants/constants";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { DeliveryPage } from "../pages/DeliveryPage/DeliveryPage";
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage";
import { StoresPage } from "../pages/StoresPage/StoresPage";

export function Router() {
	return (
		<Routes>
			<Route path={constants.routes.about} element={<AboutPage />} />
			<Route path={constants.routes.catalog} element={<CatalogPage />} />
			<Route path={constants.routes.contacts} element={<ContactsPage />} />
			<Route path={constants.routes.delivery} element={<DeliveryPage />} />
			<Route path={constants.routes.main} element={<CategoriesPage />} />
			<Route path={constants.routes.notFound} element={<NotFoundPage />} />
			<Route path={constants.routes.stores} element={<StoresPage />} />
		</Routes>
	);
}