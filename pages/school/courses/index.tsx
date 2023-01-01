import { useEffect, useState } from "react";
import HTTP from "../../../providers/HTTPService";

export default function Courses() {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		getCourses();
	}, []);

	async function getCourses() {
		const { data } = await HTTP.get("coursesApi");
		console.log("courses : ", data);
		setCourses(data);
	}
	return (
		<div className="users">
			{courses.map((cours: any, index) => {
				return <div key={index}>{cours.title}</div>;
			})}
		</div>
	);
}
