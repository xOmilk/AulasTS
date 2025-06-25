import { useState } from "react";
import { Modal } from "../../components/Modal";

import styles from "./styles.module.css";

export function Home() {
	const [isOpen, setIsOpenModal] = useState<boolean>(false);

	const openModal = () => {
		if (!isOpen) setIsOpenModal(true);
	};

	function handleCloseModal() {
		setIsOpenModal(!isOpen);
	}

	return (
		<div className={styles.container}>
			<h1>Home</h1>
			<button onClick={openModal}>Abrir Modal</button>
			<Modal isOpen={isOpen} closeHandler={handleCloseModal}>
				<Modal.Title title="Titulo generico" />
				<Modal.Content content="TEXTO GENERICO" />
				<Modal.Actions>
					<Modal.Action
						onClickHandler={handleCloseModal}
						variant="cancel"
					>
						Cancelar
					</Modal.Action>
					<Modal.Action
						onClickHandler={handleCloseModal}
						variant="info"
					>
						OK
					</Modal.Action>
					<Modal.Action
						onClickHandler={handleCloseModal}
						variant="save"
					>
						Salvar
					</Modal.Action>
				</Modal.Actions>
			</Modal>
		</div>
	);
}
