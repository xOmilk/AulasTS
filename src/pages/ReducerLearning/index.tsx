import { useReducer } from "react";

import styles from "./styles.module.css";

type Action = {
	type: "INCREMENT" | "DECREMENT" | "RESET";
	payload?: number;
};

type State = {
	secondsRemaining: number;
};

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "INCREMENT": {
			if (!action.payload) return state;

			return {
				...state,
				secondsRemaining: state.secondsRemaining + action.payload,
			};
		}

		case "DECREMENT": {
			if (!action.payload) return state;

			return {
				...state,
				secondsRemaining: state.secondsRemaining - action.payload,
			};
		}

		case "RESET": {
			return {
				...initialState,
			};
		}
	}

	return state;
}

const initialState: State = {
	secondsRemaining: 0,
};

export function ReducerLearning() {
	const [state, dispatchState] = useReducer(reducer, initialState);

	return (
		<div className={styles.container}>
			<p>O estado é:</p>
			<p className={styles.numero}>{JSON.stringify(state)}</p>

			<div className={styles.buttons}>
				<button
					onClick={() =>
						dispatchState({ type: "INCREMENT", payload: 10 })
					}
				>
					Incrementar + 10
				</button>
			</div>
			<button
				onClick={() =>
					dispatchState({ type: "DECREMENT", payload: 10 })
				}
			>
				Decrementar - 10
			</button>

			<button onClick={() => dispatchState({ type: "RESET" })}>
				RESET
			</button>
		</div>
	);
}
