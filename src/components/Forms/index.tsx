import { usePerson } from "../../reducer/usePerson";
import styles from "./styles.module.css";

export function Forms() {
	const [person, personDispatch] = usePerson();

	function handleChangeFirstName(e: React.ChangeEvent<HTMLInputElement>) {
		personDispatch({ type: "CHANGE_FIRST_NAME", value: e.target.value });
	}

	function handleChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
		personDispatch({ type: "CHANGE_LAST_NAME", value: e.target.value });
	}

	return (
		<form className={styles.form}>
			<label htmlFor="FirstNameInput">Primeiro nome</label>
			<input
				onChange={handleChangeFirstName}
				name="FirstNameInput"
				type="text"
			/>
			<label htmlFor="lastNameInput">Ultimo nome</label>
			<input
				onChange={handleChangeLastName}
				name="lastNameInput"
				type="text"
			/>

			<button type="button">Enviar formulario</button>

			{true && (
				<div>
					<p>O seu nome é {person.firstName} {person.lastName}</p>
				</div>
			)}
		</form>
	);
}
