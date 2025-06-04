import styles from "./styles.module.css";

export function Forms() {

	function handleSubmit(){

	}


	return (
		
		<form className={styles.form}>
            <label htmlFor="FirstNameInput">Primeiro nome</label>
			<input name="FirstNameInput" type="text" />
            <label htmlFor="lastNameInput">Ultimo nome</label>
			<input name="lastNameInput" type="text" />

			<button type="button" onClick={handleSubmit}>Enviar formulario</button>


			{true &&(

				<div>
					<p>TESTE</p>
				</div>

			)}
		</form>
	);
}
