import { BookText, House, LayoutTemplate, Waypoints } from "lucide-react";
import { LinkRoute } from "../LinkPattern";

import styles from "./styles.module.css";
import { PAGE_ROUTES } from "../../constants/routes";

export function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<House />
					<LinkRoute href={PAGE_ROUTES.home}>Home</LinkRoute>
				</li>
				<li>
					<LayoutTemplate />
					<LinkRoute href={PAGE_ROUTES.reducer}>Reducer</LinkRoute>
				</li>
				<li>
					<BookText />
					<LinkRoute href={PAGE_ROUTES.simpleForm}>
						Simple Form
					</LinkRoute>
				</li>

				<li>
					<Waypoints />
					<LinkRoute href={PAGE_ROUTES.routerDom}>
						Router Dom
					</LinkRoute>
				</li>
			</ul>
		</nav>
	);
}
