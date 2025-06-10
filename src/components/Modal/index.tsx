import { CircleX } from "lucide-react";
import styles from "./style.module.css";

type ModalProps = {
	isOpen: boolean;
	setModal: (isOpen: boolean) => void;
};

export function Modal({ isOpen, setModal }: ModalProps) {
	const closeModal = () => {
		setModal(false);
	};

	if (isOpen) {
		return (
			<div className={styles.backgroundModal}>
				<div className={styles.modal}>
					<div className={styles.content}>
						<h1>Aviso!!</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nam laboriosam sit delectus quaerat,
							consectetur alias. Nesciunt fugiat iste, dolorem
							incidunt animi voluptatem cum sequi optio debitis
							harum amet voluptatum quisquam.
						</p>
					</div>

					<CircleX
						width={32}
						height={32}
						onClick={closeModal}
						className={styles.closeWindow}
					/>
				</div>
			</div>
		);
	}
}
