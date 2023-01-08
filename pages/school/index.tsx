import Link from "next/link";

export default function School() {
	return (
		<div>
			<div>مدرسه</div>
			<Link className="link" href={"/school/courses"}>
				courses
			</Link>
		</div>
	);
}
