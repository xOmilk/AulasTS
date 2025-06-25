import type { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styles from "./style.module.css";

type ModalActionProps = {
	children: string;
	onClickHandler: MouseEventHandler<HTMLButtonElement>;
	variant: "info" | "cancel" | "save"; // Renomeie para evitar conflito com o 'type' do botão
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ModalAction({
	children,
	onClickHandler,
	variant,
	...props
}: ModalActionProps) {
	return (
		<button className={styles[variant]} onClick={onClickHandler} {...props}>
			{children}
		</button>
	);
}
