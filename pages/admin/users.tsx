import { useEffect, useState } from "react";
import HTTPService from "@providers/HTTPService";

export default function Users() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		console.log("get users : ");

		getUsers();
	}, []);

	async function getUsers() {
		try {
			const { data } = await HTTPService.put("user/", {
				take: 100,
				skip: 0,
			});
			setUsers(data);
		} catch (error: any) {}
	}

	return (
		<div>
			<div>users</div>
			{users.map((user: any, index) => {
				return (
					<div key={index} style={{ flexDirection: "row" }}>
						<span>{user.username}</span>
						<span>{user.firstName}</span>
						<span>{user.lastName}</span>
					</div>
				);
			})}
		</div>
	);
}
