import Link from "next/link";

export default function Login() {
	return (
		<div>
			<form className="form">
				<input
					className="input"
					type="text"
					name="username"
					id="username"
				/>
				<input
					className="input"
					type="password"
					name="password"
					id="password"
				/>
				<div
					className="btn"
					onClick={() => {
						console.log("loged in");
					}}
				>
					login
				</div>
				<Link className="link bold" href="/sign_up">
					<p>or create your account</p>
				</Link>
			</form>
		</div>
	);
}
