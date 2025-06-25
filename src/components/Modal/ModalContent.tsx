type ModalContentProps = {
	content: React.ReactNode;
};

import styles from "./style.module.css";

export function ModalContent({ content }: ModalContentProps) {
	return <div className={styles.content}>{content}</div>;
}
