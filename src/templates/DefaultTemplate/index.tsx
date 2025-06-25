import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { MainRoute } from "../../routes/MainRoute";

import styles from "./styles.module.css";

type DefaultTemplateProps = {
	children: React.ReactNode;
};

export function DefaultTemplate({ children }: DefaultTemplateProps) {
	return (
		<div className={styles.container}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}
