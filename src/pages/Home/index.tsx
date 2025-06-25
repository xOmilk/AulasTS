import { useState } from "react";
import { Modal } from "../../components/Modal";

import styles from "./styles.module.css";

export function Home() {
	const [isOpen, setIsOpenModal] = useState<boolean>(false);

	const openModal = () => {
		if (!isOpen) setIsOpenModal(true);
	};

	function handleModal() {
		setIsOpenModal(!isOpen);
	}

	return (
		<div className={styles.container}>
			<h1>Home</h1>
			<button onClick={openModal}>Abrir Modal</button>
			<Modal isOpen={isOpen} closeHandler={handleModal}>
				<Modal.Title title="Titulo generico" />
				<Modal.Content content="TEXTO GENERICO" />
				<Modal.Actions>
					<Modal.Action onClickHandler={handleModal} variant="info">
						Ok
					</Modal.Action>
				</Modal.Actions>
			</Modal>
		</div>
	);
}
