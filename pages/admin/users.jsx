import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		console.log("befor user : ", users);
		getUsers();
		console.log("after user : ", users);
	}, []);

	async function getUsers() {
		const { data } = await axios.get("http://localhost:3000/api/userApi");
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
