import { useEffect, useState } from "react";
import HTTP from "../../service/axiosClone";

export default function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		console.log("befor user : ", users);
		getUsers();
		console.log("after user : ", users);
	}, []);

	async function getUsers() {
		const { data } = await HTTP.get("userApi");
		console.log("users : ", data);
		setUsers(data);
	}
	return (
		<div className="users">
			{users.map((user, index) => {
				return <div key={index}>{user.firstName}</div>;
			})}
		</div>
	);
}
