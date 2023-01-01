import Link from "next/link";

export default function FooterMain() {
	return (
		<div className="footer_wrapper">
			<ul className="footer">
				<li className="footer_link">
					<Link href="/">home</Link>
				</li>
				<li className="footer_link">
					<Link href="/school">school</Link>
				</li>
				<li className="footer_link">
					<Link href="/blog">blog</Link>
				</li>
				<li className="footer_link">
					<Link href="/news">news</Link>
				</li>
				<li className="footer_link">
					<Link href="/profile">profile</Link>
				</li>
			</ul>
		</div>
	);
}
