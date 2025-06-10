import { useState } from "react";
import { Modal } from "../../components/Modal";

export function Home() {
	const [isOpen, setIsOpenModal] = useState(false);

	const openModal = () => {
		if (!isOpen) setIsOpenModal(true);
	};

	return (
		<>
			<h1>Home</h1>
			<button onClick={openModal}>Abrir Modal</button>

			<Modal isOpen={isOpen} setModal={setIsOpenModal} />
		</>
	);
}
