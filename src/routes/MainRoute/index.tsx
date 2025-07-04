import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "../../pages/Home";
import { ReducerLearning } from "../../pages/ReducerLearning";
import { SimpleForm } from "../../pages/SimpleForm";
import { DefaultTemplate } from "../../templates/DefaultTemplate";
import { RouterDom } from "../../pages/RouterDom";
import { NotFound } from "../../pages/NotFound";

export function MainRoute() {
	return (
		<BrowserRouter>
			<DefaultTemplate>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/reducer-learning"
						element={<ReducerLearning />}
					/>
					<Route path="/simple-form" element={<SimpleForm />} />
					<Route path="/router-dom" element={<RouterDom />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</DefaultTemplate>
		</BrowserRouter>
	);
}
