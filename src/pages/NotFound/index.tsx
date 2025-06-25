import { LinkRoute } from "../../components/LinkPattern";

import styles from "./styles.module.css";

export function NotFound() {
	return (
		<div className={styles.container}>
			<h1>Not found</h1>

			<LinkRoute href="/" children="Ir para home" />
		</div>
	);
}
