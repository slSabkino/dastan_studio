import Link from "next/link";

export default function School() {
	return (
		<div>
			<div>مدرسه</div>
			<div>
				<Link href={"/school/courses"}>courses</Link>
			</div>
		</div>
	);
}
