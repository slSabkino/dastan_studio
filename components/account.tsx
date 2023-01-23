import Link from "next/link";
import { tokenState } from "@providers/recoilAtoms";
import { useCheckAccount, useUserAccount } from "hooks/useUserAccount";

export default function Account() {
	const { token, user } = useCheckAccount();
	const { onSignOut } = useUserAccount();

	function renderState() {
		if (token === tokenState.notoken) {
			return (
				<Link href="/login" className="btn">
					sign in
				</Link>
			);
		} else if (token === tokenState.loading) {
			return <div className="btn">...</div>;
		} else {
			return (
				<div
					className="btn"
					onClick={() => {
						onSignOut();
					}}
				>
					<span>sign out</span>
					<span>{user.username}</span>
				</div>
			);
		}
	}

	return <div>{renderState()}</div>;
}
