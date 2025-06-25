import { useReducer } from "react";
type Person = {
	firstName: string;
	lastName: string;
};

export enum PersonActionsType {
	CHANGE_FIRST_NAME = "CHANGE_FIRST_NAME",
	CHANGE_LAST_NAME = "CHANGE_LAST_NAME",
}

type Action = {
	type: PersonActionsType;
	value: string;
};

const reducer = (state: Person, action: Action) => {
	switch (action.type) {
		case PersonActionsType.CHANGE_FIRST_NAME:
			return {
				...state,
				firstName: action.value,
			};
		case PersonActionsType.CHANGE_LAST_NAME:
			return {
				...state,
				lastName: action.value,
			};
		default:
			return state;
	}
};

const initialState: Person = {
	firstName: "",
	lastName: "",
};

export function usePerson() {
	return useReducer(reducer, initialState);
}
