import HTTPService from "@providers/HTTPService";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Course() {
	const [courseInfo, setCourseInfo] = useState({ lessons: [] });
	const router = useRouter();

	async function getCourse(course_id: string) {
		const { data } = await HTTPService.get(`course/${course_id}`);
		console.log("course : ", data);
		setCourseInfo(data);
	}

	useEffect(() => {
		if (router.isReady) {
			getCourse(router.query.course_id as string);
		}
	}, [router]);

	return (
		<div>
			{courseInfo?.lessons?.map((lesson: any, index) => {
				return (
					<div key={index}>
						<Link
							className="link"
							href={`/school/courses/${router.query.course_title}/${router.query.course_id}/${lesson.title}/${lesson.id}`}
						>
							{lesson.title}
						</Link>
					</div>
				);
			})}
		</div>
	);
}
