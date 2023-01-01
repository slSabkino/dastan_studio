import HTTPService from "@providers/HTTPService";
import Link from "next/link";
import { useState } from "react";
import { getCookie } from "cookies-next";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<form className="form">
				<input
					className="input"
					type="text"
					name="username"
					id="username"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="input"
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div
					className="btn"
					onClick={() => {
						onLogin(email, password);
					}}
				>
					login
				</div>

				<div className="btn" onClick={testLogin}>
					test login
				</div>
				<Link className="link bold" href="/sign_up">
					<p>or create your account</p>
				</Link>
			</form>
		</div>
	);
}

async function onLogin(email: string, password: string) {
	try {
		const { data } = await HTTPService.post("loginApi", { email, password });
		console.log("loged in : ", data);
	} catch (error) {
		console.log("err : ", error);
	}
}

async function testLogin() {
	try {
		const { data } = await HTTPService.get("loginApi");
		console.log("loged in : ", data);
	} catch (error) {
		console.log("err : ", error);
	}
}
