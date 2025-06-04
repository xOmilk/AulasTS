import { useReducer } from "react";

import styles from "./styles.module.css";

export function ReducerLearning() {
	const [numero, dispatchNumero] = useReducer((state, action) => {
		switch (action) {
			case "INCREMENT":
				return state + 1;

			case "DECREMENT":
				if (state > 0) return state - 1;

			case "ZERAR":
				return (state = 0);
		}

		return state;
	}, 0);

	return (
		<div className={styles.container}>
			<p>O numero é:</p>
			<p className={styles.numero}>{numero}</p>

			<div className={styles.buttons}>
				<button onClick={() => dispatchNumero("DECREMENT")}>
					Decrementar
				</button>
				<button onClick={() => dispatchNumero("INCREMENT")}>
					Incrementar
				</button>
			</div>
			<button onClick={() => dispatchNumero("ZERAR")}>Zerar</button>
		</div>
	);
}
