import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { ReducerLearning } from "../../pages/ReducerLearning";
import { SimpleForm } from "../../pages/SimpleForm";
import { DefaultTemplate } from "../../templates/DefaultTemplate";
import { RouterDom } from "../../pages/RouterDom";
import { NotFound } from "../../pages/NotFound";
import { PAGE_ROUTES } from "../../constants/routes";
import { Request } from "../../pages/Request";

export function MainRoute() {
	return (
		<BrowserRouter>
			<DefaultTemplate>
				<Routes>
					<Route path={PAGE_ROUTES.home} element={<Home />} />
					<Route
						path={PAGE_ROUTES.reducer}
						element={<ReducerLearning />}
					/>
					<Route
						path={PAGE_ROUTES.simpleForm}
						element={<SimpleForm />}
					/>
					<Route
						path={PAGE_ROUTES.routerDom}
						element={<RouterDom />}
					/>
					<Route
						path={PAGE_ROUTES.request}
						element={<Request />} />
					<Route
						path={PAGE_ROUTES.notFound}
						element={<NotFound />} />
				</Routes>
			</DefaultTemplate>
		</BrowserRouter>
	);
}
