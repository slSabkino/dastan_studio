import { toast } from "react-toastify";

export default function Home() {
	return (
		<div className="page_home">
			<p>the dastan school</p>
			<h1>یک عنوان پارسی</h1>
			<p>یک پاراگراف پارسی </p>

			<button
				onClick={() => {
					toast.info("test toast");
				}}
			>
				test toast
			</button>
		</div>
	);
}
