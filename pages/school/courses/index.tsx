import HTTPService from "@providers/HTTPService";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Courses() {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		getCourses();
	}, []);

	async function getCourses() {
		const { data } = await HTTPService.get("courses");
		console.log("courses : ", data);
		setCourses(data);
	}
	return (
		<div className="users">
			{courses.map((course: any, index) => {
				return (
					<div key={index}>
						<Link
							className="link"
							href={`/school/courses/${course.title}/${course.id}`}
						>
							{course.title}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
