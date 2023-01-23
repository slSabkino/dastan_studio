import { noUserInfo, tokenAtom, tokenState, userAtom } from "@providers/recoilAtoms";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { loginCAPI, logOutCAPI } from "@providers/clientApi/userClientApi";

export function useUserAccount() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [_user, setUser] = useRecoilState(userAtom);
	const [_token, setToken] = useRecoilState(tokenAtom);

	const router = useRouter();

	async function onLogin() {
		try {
			const data = await loginCAPI(email, password);
			if (data.state) {
				const decoded = jwt.decode(data.token as string) as any;
				setUser(decoded);
				setToken(tokenState.hasToken);
				router.push("/");
			}
		} catch (error) {
			console.log("errort : ", error);
		}
	}

	function onLogOut() {
		logOutCAPI();
		deleteCookie("token");
		setUser(noUserInfo);
		setToken(tokenState.notoken);
		router.push("/");
	}

	return {
		email,
		password,
		setEmail,
		setPassword,
		onLogin,
		onLogOut,
	};
}

export function useCheckAccount() {
	const [user, setUser] = useRecoilState(userAtom);
	const [token, setToken] = useRecoilState(tokenAtom);

	useEffect(() => {
		try {
			const tok = getCookie("token", {
				sameSite: false,
				httpOnly: false,
				secure: false,
				domain: "localhost",
				path: "/",
			});
			if (tok) {
				const decoded = jwt.decode(tok as string) as any;
				setUser(decoded);
				setToken(tokenState.hasToken);
			} else {
				setUser(noUserInfo);
				setToken(tokenState.notoken);

				// TODO remove at end
				console.log("no token");
			}
		} catch (error) {
			console.log("error on load token");
		}
	}, []);

	return {
		user,
		token,
	};
}
