import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect, useState } from "react";

enum tokenState {
	hasToken,
	noToken,
	loading,
}

export default function Account() {
	const [token, setToken] = useState(tokenState.loading);

	useEffect(() => {
		setToken(
			getCookie("token", { domain: "localhost", path: "/" })
				? tokenState.hasToken
				: tokenState.noToken
		);
	}, []);

	function signOut() {
		deleteCookie("token");
		setToken(tokenState.noToken);
	}

	function renderState() {
		if (token === tokenState.hasToken) {
			return (
				<div className="btn" onClick={signOut}>
					<p>sign out</p>
				</div>
			);
		} else if (token === tokenState.noToken) {
			return (
				<Link href="/login" className="btn">
					sign in
				</Link>
			);
		} else {
			<div className="btn">...</div>;
		}
	}

	return <div>{renderState()}</div>;
}
