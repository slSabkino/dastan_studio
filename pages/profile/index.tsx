import Link from "next/link";

export default function Profile() {
	return (
		<div className="user">
			<div className="user_header">
				<li className="link">
					<Link href={"/school/create_course"}>افزودن دوره</Link>
				</li>
			</div>
		</div>
	);
}
