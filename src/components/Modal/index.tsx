import { ModalAction } from "./ModalAction";
import { ModalActions } from "./ModalActions";
import { ModalContent } from "./ModalContent";
import { ModalHeader } from "./ModalHeader";
import { ModalSubtitle } from "./ModalSubtitle";

import { CircleX } from "lucide-react";
import styles from "./style.module.css";

type ModalProps = {
	isOpen: boolean;
	children: React.ReactNode;
	closeHandler: () => void;
};

export function Modal({ isOpen, children, closeHandler }: ModalProps) {
	if (isOpen) {
		return (
			<div className={styles.backgroundModal}>
				<div className={styles.modal}>
					{children}

					<CircleX
						width={32}
						height={32}
						onClick={closeHandler}
						className={styles.closeWindow}
					/>
				</div>
			</div>
		);
	}
}

Modal.Title = ModalHeader;
Modal.Subtitle = ModalSubtitle;
Modal.Content = ModalContent;
Modal.Action = ModalAction;
Modal.Actions = ModalActions;
