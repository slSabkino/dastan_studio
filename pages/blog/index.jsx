import { fetchPosts, getAllPosts } from "@store/postStore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function Blog() {
	const dispatch = useDispatch();
	const posts = useSelector(getAllPosts);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return (
		<div>
			<span>
				{posts.map((p, index) => (
					<span key={index}>{p.title}</span>
				))}
			</span>

			<form onSubmit={handleSubmit(onSubmit)}>
				<input defaultValue="test" {...register("name")} />
				<input {...register("password", { required: true })} />
				{errors.password && <span>This field is required</span>}

				<input type="submit" />
			</form>
		</div>
	);
}
