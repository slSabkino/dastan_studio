import { useState } from "react";

export default function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");

	const onSubmit = async () => {
		const body = {
			first_name: firstName,
			last_name: lastName,
			username,
			phone: parseInt(phone),
			email,
		};
		const data = await fetch("http://localhost:3000/api/user", {
			method: "post",
			body: JSON.stringify(body),
		});
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
				<div className="form_row"></div>

				<button className="btn" type="submit">
					register
				</button>
			</form>
		</div>
	);
}
