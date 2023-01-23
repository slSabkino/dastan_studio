import { useUserAccount } from "@hooks/useUserAccount";
import Link from "next/link";

export default function Login() {
	const { email, password, onLogin, setEmail, setPassword } = useUserAccount();

	return (
		<div>
			<form
				className="form"
				onSubmit={(e) => {
					e.preventDefault();
					onLogin();
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
