import { iCourse } from "../../../models/interfaceCourse";
import HTTPService from "@providers/HTTPService";
import { useState } from "react";

export default function CreateCourse() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const onSubmit = async () => {
		const body: iCourse = {
			authorId: 2,
			bannerUrl: "",
			categoryId: 1,
			description,
			title,
		};
		console.log("body : ", body);

		const data = await HTTPService.post("courseApi", body);
		console.log("user : ", data);
	};

	return (
		<form
			className="form create_course_form"
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit();
			}}
		>
			<div className="form_row">
				<label className="label" htmlFor="title">
					title
				</label>
				<input
					className="input"
					type="text"
					name="title"
					id="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="form_row">
				<label className="label" htmlFor="description">
					description
				</label>
				<input
					className="input"
					type="text"
					name="description"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<button type="submit">create</button>
		</form>
	);
}
