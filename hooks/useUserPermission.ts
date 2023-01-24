import { tokenAtom, tokenState, userAtom } from "@providers/recoilAtoms";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export function useUserPermission(isPrivatePage = false) {
	const [token, _setToken] = useRecoilState(tokenAtom);
	const [user, _setUser] = useRecoilState(userAtom);

	const router = useRouter();

	useEffect(() => {
		if (isPrivatePage && token === tokenState.notoken) {
			router.push("/login");
		}
	}, [token]);

	return {
		isLoggedin: token === tokenState.hasToken,
		permisonlvl: user?.permissionLevel || 0,
	};
}
