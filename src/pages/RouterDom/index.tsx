import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";

export function RouterDom() {
	const [time, setTime] = useState(45);
	const timeout = useRef(0);
	const navigate = useNavigate();

	useEffect(() => {
		clearTimeout(timeout.current);

		timeout.current = setTimeout(() => {
			setTime((prevTime) => prevTime - 1);
		}, 1000);

		if (time <= 0) {
			navigate("/");
		}

		return () => {
			clearTimeout(timeout.current);
		};
	}, [time]);

	return (
		<div className={styles.page}>
			<h2>SAINDO DAQUI EM: {time}s</h2>
			<div className={styles.container}>
				<div className={styles.cardItem}>TESTEEEE</div>
				<div className={styles.cardItem}>TESTEEEE</div>
				<div className={styles.cardItem}>TESTEEEE</div>
			</div>
		</div>
	);
}
