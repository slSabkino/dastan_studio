import { useEffect, useState } from "react";
import HTTPService from "@providers/HTTPService";

export default function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getUsers();
	}, []);

	async function getUsers() {
		const { data } = await HTTPService.get("userApi");
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
