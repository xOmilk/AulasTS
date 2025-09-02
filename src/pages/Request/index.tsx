import Axios from "axios";
import { axiosInstance } from "../../constants/axiosInstance";
import { useEffect, useRef, useState } from "react";

import styles from "./style.module.css";

export function Request() {
	const [books, setBooks] = useState<[]>([]);

	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const ref = useRef<HTMLPreElement>(null);

	async function createNewPost() {
		const response = await axiosInstance.post(
			"/users",
			{
				username: name,
				email: email,
			},
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		console.log(response);

		if (response.status === 201) {
			setName("");
			setEmail("");
			if (ref.current) {
				ref.current.textContent = JSON.stringify(response.data);
			}
		}
	}

	useEffect(() => {
		setTimeout(() => {
			Axios({
				method: "get",
				baseURL: "https://potterhead-api.vercel.app/api",
				url: "/books",
			}).then((data) => {
				console.log(data);
				setBooks(data.data);
			});
		}, 3500);
	}, []);

	return (
		<div className={styles.container}>
			{" "}
			<header>
				<p>Modulo de request usando AXIOS</p>
			</header>
			<main className={styles["field-group"]}>
				<label className={styles["field-row"]} htmlFor="">
					NOME
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label className={styles["field-row"]} htmlFor="">
					EMAIL
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>

				<button onClick={createNewPost}>Criar Post</button>
				<pre ref={ref}></pre>
			</main>
		</div>
	);
}
