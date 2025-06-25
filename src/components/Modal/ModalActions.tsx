import styles from "./style.module.css";

type ModalActionsProps = {
	children: React.ReactNode;
};

export function ModalActions({ children }: ModalActionsProps) {
	return (
		<footer>
			<div className={styles.footer}>{children}</div>
		</footer>
	);
}
