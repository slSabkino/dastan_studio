import Account from "@components/account";
import { userAtom } from "@providers/recoilAtoms";
import { useRecoilState } from "recoil";
import headerProps from "types/headerTypes";

interface props {
	location: headerProps;
}
export default function HeaderMain(props: props) {
	const [user, _setUser] = useRecoilState(userAtom);

	const { base, category, subCategory } = props.location;

	return (
		<div className="header_wrapper">
			<div className="header">
				<Account />
				<p>{user.username}</p>
				<div>{base}</div>
				{category && <div>{category} </div>}
				{subCategory && <div>{subCategory} </div>}
			</div>
		</div>
	);
}
