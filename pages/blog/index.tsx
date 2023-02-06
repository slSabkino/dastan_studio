import {
	createPostHandler,
	deletePostHandler,
	getAllPosts,
	getOnePostHandler,
	getSelectedPost,
	getSomePostHandler,
	updatePostHandler,
} from "@store/postStore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { iPost } from "@models/interfacePost";
import { AppDispatch } from "@store/baseStore";

export default function Blog() {
	const dispatch = useDispatch<AppDispatch>();
	const posts = useSelector(getAllPosts);
	const selectedPost = useSelector(getSelectedPost);
	const [isUpdate, setIsUpdate] = useState(false);
	const [postId, setPostId] = useState(0);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	function onSubmit(data: any) {
		console.log(data);
		if (isUpdate) {
			data.categoryId = parseInt(data.categoryId);
			dispatch(updatePostHandler({ id: postId, body: data }));
		} else {
			data.categoryId = parseInt(data.categoryId);
			data.authorId = 1;
			dispatch(createPostHandler(data));
		}
	}

	function ondelete(id: number) {
		dispatch(deletePostHandler(id));
	}

	useEffect(() => {
		dispatch(getSomePostHandler({ skip: 0, take: 10 }));
		dispatch(getOnePostHandler(2));
		console.log("re render is ");
	}, []);

	return (
		<div
			style={{
				flexDirection: "row",
				justifyContent: "space-around",
				width: "100%",
			}}
		>
			{/* <div style={{ backgroundColor: "coral" }}>
				<p>{selectedPost?.title}</p>
				<p>{selectedPost?.description}</p>
				<p>{selectedPost?.bannerUrl}</p>
				<p>{selectedPost?.categoryId}</p>
				<p>{selectedPost?.creationDate}</p>
			</div> */}

			<form onSubmit={handleSubmit(onSubmit)} style={{ flexDirection: "column" }}>
				<input
					placeholder="title"
					defaultValue={selectedPost?.title}
					{...register("title", { required: true })}
				/>
				<input
					placeholder="description"
					defaultValue={selectedPost?.description}
					{...register("description", { required: true })}
				/>
				<input
					placeholder="bannerUrl"
					defaultValue={selectedPost?.bannerUrl}
					{...register("bannerUrl", { required: true })}
				/>
				<input
					placeholder="categoryId"
					type="number"
					defaultValue={selectedPost?.categoryId}
					{...register("categoryId", {
						required: true,
					})}
				/>

				{errors.password && <span>This field is required</span>}

				<input type="submit" value="submit" />
			</form>

			<ul style={{ flexDirection: "column" }}>
				{posts.map((p: iPost, index: number) => (
					<li key={index} style={{ flexDirection: "row" }}>
						<span>{p.title}</span>
						<button onClick={() => ondelete(p.id as number)}>
							X
						</button>
					</li>
				))}
			</ul>

			<div style={{ flexDirection: "column" }}>
				<input
					type="checkbox"
					name=""
					id=""
					checked={isUpdate}
					onChange={(e) => setIsUpdate(!isUpdate)}
				/>

				{isUpdate && (
					<input
						placeholder="post id"
						type="number"
						value={postId}
						onChange={(e) => {
							setPostId(parseInt(e.target.value));
						}}
					/>
				)}
			</div>
		</div>
	);
}

const postSample = {
	id: 2,
	title: "t1",
	description: "d1",
	bannerUrl: "b1",
	authorId: 1,
	categoryId: 1,
	isActive: true,
	creationDate: "2023-02-05T00:00:00.000Z",
	updateDate: null,
};
