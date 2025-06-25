type ModalSubtitleProps = React.ComponentProps<"p"> & {
	text: string;
};

import "./style.module.css";

export function ModalSubtitle({ text, ...props }: ModalSubtitleProps) {
	return <p {...props}>{text}</p>;
}
