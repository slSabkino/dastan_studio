import { iPost } from "@models/interfacePost";
import HTTPService from "@providers/HTTPService";
import { createAsyncThunk, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("post/fetch", async () => {
	try {
		const { data } = await HTTPService.put("post", { skip: 0, take: 100 });
		return { posts: data };
	} catch (error: any) {
		return error.message;
	}
});

export const getAllPosts = (state: any) => state.posts.data;

export const postSlice = createSlice({
	name: "posts",
	initialState: { data: [] },
	reducers: {
		postAdder(state: { data: iPost[] }, action: PayloadAction<any>) {
			state.data = action.payload.posts;
		},
		// postRemover(state: iPost[], action: PayloadAction<{ id: number }>) {
		// 	const index = state.findIndex((p) => p.id === action.payload.id);
		// 	state.posts.splice(index, 1);
		// },
		// postUpdater(state: iPost[], action: PayloadAction<{ id: number; post: iPost }>) {
		// 	const index = state.findIndex((p) => p.id === action.payload.id);
		// 	state.posts[index] = action.payload.post;
		// },
	},
	extraReducers(builder) {
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			console.log("action : ", action);
			state.data = action.payload.posts;
		});
	},
});
