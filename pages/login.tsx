import HTTPService from "@providers/HTTPService";
import Link from "next/link";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState, tokenAtom, userAtom } from "@providers/recoilAtoms";
import { useRouter } from "next/router";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [_token, setToken] = useRecoilState(tokenAtom);
	const [_user, setUser] = useRecoilState(userAtom);

	const router = useRouter();

	async function onLogin(email: string, password: string) {
		const { data } = await HTTPService.post("loginApi", { email, password });
		console.log("logindata : ", data);

		if (data.state) {
			localStorage.setItem("user", JSON.stringify(data));
			setToken(loginState.hasToken);
			setUser(data);
			router.push("/");
		}
	}

	return (
		<div>
			<form
				className="form"
				onSubmit={(e) => {
					e.preventDefault();
					onLogin(email, password);
				}}
			>
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
				<button>login</button>

				<Link className="link bold" href="/sign_up">
					<p>or create your account</p>
				</Link>
			</form>
		</div>
	);
}
