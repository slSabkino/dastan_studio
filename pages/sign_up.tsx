import { useState } from "react";
import { iUser } from "@models/interfaceUser";
import HTTPService from "@providers/HTTPService";

export default function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordre, setPasswordre] = useState("");

	const onSubmit = async () => {
		const body: iUser = {
			firstName,
			lastName,
			username,
			phone,
			email,
			password,
		};
		console.log("body : ", body);

		const data = await HTTPService.post("userApi", body);
		console.log("user : ", data);
	};

	return (
		<div>
			<form
				className="form"
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}
			>
				<div className="form_row">
					<label className="label" htmlFor="first_name">
						first name
					</label>
					<input
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
						className="input"
						type="text"
						id="first_name"
					/>
				</div>
				<div className="form_row">
					<label className="label" htmlFor="last_name">
						last name
					</label>
					<input
						value={lastName}
						onChange={(e) => {
							setLastName(e.target.value);
						}}
						className="input"
						type="text"
						id="last_name"
					/>
				</div>
				<div className="form_row">
					<label className="label" htmlFor="username">
						username
					</label>
					<input
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						className="input"
						type="text"
						id="username"
					/>
				</div>
				<div className="form_row">
					<label className="label" htmlFor="phone_number">
						phone number
					</label>
					<input
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value);
						}}
						className="input"
						type="text"
						id="phone_number"
					/>
				</div>
				<div className="form_row">
					<label className="label" htmlFor="email">
						email
					</label>
					<input
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						className="input"
						type="email"
						id="email"
					/>
				</div>
				<div className="form_row">
					<label className="label" htmlFor="password">
						password
					</label>
					<input
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						className="input"
						type="password"
						id="password"
					/>
				</div>
				<div className="form_row">
					<label className="label" htmlFor="passwordre">
						repeat password
					</label>
					<input
						value={passwordre}
						onChange={(e) => {
							setPasswordre(e.target.value);
						}}
						className="input"
						type="password"
						id="passwordre"
					/>
				</div>
				<button className="btn" type="submit">
					register
				</button>
			</form>
		</div>
	);
}
