import Link from "next/link";
import { deleteCookie, getCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { loginState, noUser, tokenAtom, userAtom } from "@providers/recoilAtoms";

export default function Account() {
	const [token, setToken] = useRecoilState(tokenAtom);
	const [_user, setUser] = useRecoilState(userAtom);

	const router = useRouter();

	useEffect(() => {
		try {
			const token = getCookie("token", {
				sameSite: false,
				httpOnly: false,
				secure: false,
				domain: "localhost",
				path: "/",
			});

			setToken(token ? loginState.hasToken : loginState.noToken);
			console.log("token : ", token);
		} catch (error) {
			console.log("error on load token");
		}
	}, []);

	function signOut() {
		deleteCookie("token");
		setToken(loginState.noToken);
		localStorage.removeItem("user");
		setUser(noUser);
		router.push("/");
	}

	function renderState() {
		if (token === loginState.hasToken) {
			return (
				<div className="btn" onClick={signOut}>
					<span>sign out</span>
				</div>
			);
		} else if (token === loginState.noToken) {
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
