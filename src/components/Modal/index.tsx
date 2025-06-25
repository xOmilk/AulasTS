import { CircleX } from "lucide-react";
import styles from "./style.module.css";

type ModalProps = {
	isOpen: boolean;
	setModal: (isOpen: boolean) => void;
	hasActions?: boolean;
};

export function Modal({ isOpen, setModal, hasActions }: ModalProps) {
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

					{hasActions && (
						<footer>
							<div className="buttons">
								<button
									className={styles.cancel}
									onClick={closeModal}
								>
									Cancelar
								</button>
								<button
									className={styles.save}
									onClick={closeModal}
								>
									Salvar
								</button>
							</div>
						</footer>
					)}
				</div>
			</div>
		);
	}
}
