import { useState } from "react";
import { Modal } from "../../components/Modal";

import styles from "./styles.module.css";

export function Home() {
	const [isOpen, setIsOpenModal] = useState(false);

	const openModal = () => {
		if (!isOpen) setIsOpenModal(true);
	};

	return (
		<div className={styles.container}>
			<h1>Home</h1>
			<button onClick={openModal}>Abrir Modal</button>
			<Modal isOpen={isOpen} setModal={setIsOpenModal} />
		</div>
	);
}
