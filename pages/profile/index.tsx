import { useUserPermission } from "@hooks/useUserPermission";
import { userAtom } from "@providers/recoilAtoms";

import { useRecoilState } from "recoil";

export default function Profile() {
	const [user, _setUser] = useRecoilState(userAtom);
	const { permisonlvl } = useUserPermission(true);

	return (
		<div className="user">
			<div className="user_sidebar">
				{permisonlvl > 5 ? <span>your posts</span> : null}
				{permisonlvl > 10 ? <span>your news</span> : null}
				{permisonlvl > 15 ? <span>your course</span> : null}
			</div>
			<div className="user_info">
				<span>profile</span>
				<input type="text" name="" id="" placeholder="name..." />
				<span>{user.username}</span>
				<span>{user.firstName}</span>
				<span>{user.lastName}</span>
				<span>{user.email}</span>
				<span>{user.phone}</span>
				<span>{user.city?.title}</span>
				{user.interests?.map((intrest, index) => {
					return <span key={index}>{intrest.title}</span>;
				})}
				{/* <li className="link">
					<Link href={"/school/create_course"}>افزودن دوره</Link>
				</li> */}
			</div>
		</div>
	);
}
