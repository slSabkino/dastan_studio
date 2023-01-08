import HTTPService from "@providers/HTTPService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Lesson() {
	const [lessonInfo, setLessonInfo] = useState<any>(null);
	const router = useRouter();

	async function getCourse(lessonId: string) {
		const { data } = await HTTPService.get(`lesson/${lessonId}`);
		console.log("course : ", data);
		setLessonInfo(data);
	}

	useEffect(() => {
		if (router.isReady) {
			getCourse(router.query.lesson_id as string);
		}
	}, [router]);

	return (
		<div>
			<div>{lessonInfo?.title}</div>
			<div>{lessonInfo?.description}</div>
		</div>
	);
}
