import { BookText, House, LayoutTemplateIcon, Waypoints } from "lucide-react";
import { LinkRoute } from "../LinkPattern";

import styles from "./styles.module.css";
import { PAGE_ROUTES } from "../../constants/routes";
import { SiAxios } from "react-icons/si";

export function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<LinkRoute href={PAGE_ROUTES.home}>
						<House />
						<span>Home</span>
					</LinkRoute>
				</li>
				<li>
					<LinkRoute href={PAGE_ROUTES.reducer}>
						<LayoutTemplateIcon />
						<span>Reducer</span>
					</LinkRoute>
				</li>
				<li>
					<LinkRoute href={PAGE_ROUTES.simpleForm}>
						<BookText />
						<span>Simple Form</span>
					</LinkRoute>
				</li>
				<li>
					<LinkRoute href={PAGE_ROUTES.routerDom}>
						<Waypoints />
						<span>Router Dom</span>
					</LinkRoute>
				</li>
				<li>
					<LinkRoute href={PAGE_ROUTES.request}>
						<SiAxios size={24} />
						<span>Request</span>
					</LinkRoute>
				</li>
			</ul>
		</nav>
	);
}
