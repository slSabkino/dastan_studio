import headerProps from "@propsTypes/header";
import { signIn, signOut, useSession } from "next-auth/react";

interface props {
	location: headerProps;
}
export default function HeaderMain(props: props) {
	const { data: session, status } = useSession();
	console.log("session status : ", status);
	console.log("session : ", session);

	const { base, category, subCategory } = props.location;

	return (
		<div className="header_wrapper">
			<div className="header">
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

				<div>{base}</div>
				{category && <div>{category} </div>}
				{subCategory && <div>{subCategory} </div>}
			</div>
		</div>
	);
}
