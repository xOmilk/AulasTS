import { BookText, House, LayoutTemplate, Waypoints } from "lucide-react";
import { LinkRoute } from "../LinkPattern";

import styles from "./styles.module.css";

export function Navbar() {
	return (
		<nav className={styles.navbar}>
			<ul>
				<li>
					<House />
					<LinkRoute href="/">Home</LinkRoute>
				</li>
				<li>
					<LayoutTemplate />
					<LinkRoute href="/reducer-learning">Reducer</LinkRoute>
				</li>
				<li>
					<BookText />
					<LinkRoute href="/simple-form">Simple Form</LinkRoute>
				</li>

				<li>
					<Waypoints />
					<LinkRoute href="/router-dom">Router Dom</LinkRoute>
				</li>
			</ul>
		</nav>
	);
}
