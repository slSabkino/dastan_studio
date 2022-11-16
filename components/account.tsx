import { signIn, signOut, useSession } from "next-auth/react";

export default function Account() {
	const { data: session, status } = useSession();
	console.log("session status : ", status);
	console.log("session : ", session);
	return (
		<div>
			{session ? (
				<div className="btn" onClick={() => signOut()}>
					<p>sign out</p>
					<p>{session.user?.name}</p>
				</div>
			) : (
				<div className="btn" onClick={() => signIn()}>
					sign in
				</div>
			)}
		</div>
	);
}
