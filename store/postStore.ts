import { iPost } from "@models/interfacePost";
import HTTPService from "@providers/HTTPService";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getSomePostHandler = createAsyncThunk(
	"post/getSome",
	async ({ skip = 0, take = 100 }: { skip: number; take: number }) => {
		try {
			const { data } = await HTTPService.put("post", { skip, take });
			return { data };
		} catch (error: any) {
			console.log("error : ", error);
			return error.message;
		}
	}
);

export const getOnePostHandler = createAsyncThunk("post/getOne", async (id: number) => {
	try {
		const { data } = await HTTPService.get(`post/${id}`);
		return { data };
	} catch (error: any) {
		console.log("error : ", error);
		return error.message;
	}
});

export const createPostHandler = createAsyncThunk("post/create", async (post: iPost) => {
	console.log("post : ", post);
	try {
		const { data } = await HTTPService.post("post", post);
		return { data };
	} catch (error: any) {
		console.log("error : ", error);
		return error.message;
	}
});

export const updatePostHandler = createAsyncThunk(
	"post/update",
	async ({ id, body }: { id: number; body: iPost }) => {
		try {
			const { data } = await HTTPService.put(`post/${id}`, body);
			return { data };
		} catch (error: any) {
			console.log("error : ", error);
			return error.message;
		}
	}
);

export const deletePostHandler = createAsyncThunk("post/delete", async (id: number) => {
	try {
		const { data } = await HTTPService.delete(`post/${id}`);
		return { data };
	} catch (error: any) {
		console.log("error : ", error);
		return error.message;
	}
});

type postSliceType = {
	list: iPost[];
	isLoadig: boolean;
	error: null | string;
	lastCall: null | number;
	selected: {
		data: null | iPost;
		error: null | string;
		lastCall: null | number;
		isLoadig: boolean;
	};
};

const initialState: postSliceType = {
	list: [],
	isLoadig: false,
	error: null,
	lastCall: null,
	selected: { data: null, error: null, lastCall: null, isLoadig: false },
};

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdder(state: { list: iPost[] }, action: PayloadAction<any>) {
			state.list = action.payload.data;
		},
		postRemover(state: { list: iPost[] }, action: PayloadAction<{ id: number }>) {
			const index = state.list.findIndex((p) => p.id === action.payload.id);
			state.list.splice(index, 1);
		},
		postUpdater(
			state: { list: iPost[] },
			action: PayloadAction<{ id: number; post: iPost }>
		) {
			const index = state.list.findIndex((p) => p.id === action.payload.id);
			state.list[index] = action.payload.post;
		},
	},
	extraReducers(builder) {
		//get some
		builder.addCase(getSomePostHandler.pending, (state, _action) => {
			state.isLoadig = true;
		});
		builder.addCase(getSomePostHandler.fulfilled, (state, action) => {
			state.list = action.payload.data;
			state.isLoadig = false;
			state.lastCall = Date.now();
		});
		builder.addCase(getSomePostHandler.rejected, (state, _action) => {
			state.isLoadig = false;
		});

		//get one
		builder.addCase(getOnePostHandler.pending, (state, _action) => {
			state.selected.isLoadig = true;
		});
		builder.addCase(getOnePostHandler.fulfilled, (state, action) => {
			state.selected.data = action.payload.data;
			state.selected.isLoadig = false;
			state.selected.lastCall = Date.now();
		});
		builder.addCase(getOnePostHandler.rejected, (state, _action) => {
			state.selected.isLoadig = false;
		});

		//create
		builder.addCase(createPostHandler.pending, (state, _action) => {
			state.selected.isLoadig = true;
		});
		builder.addCase(createPostHandler.fulfilled, (state, action) => {
			console.log("new post : ", action.payload.data);
			state.selected.data = action.payload.data;
			state.selected.isLoadig = false;
			state.selected.lastCall = Date.now();

			state.list.push(action.payload.data);
		});
		builder.addCase(createPostHandler.rejected, (state, _action) => {
			state.selected.isLoadig = false;
		});

		//update
		builder.addCase(updatePostHandler.pending, (state, _action) => {
			state.selected.isLoadig = true;
		});
		builder.addCase(updatePostHandler.fulfilled, (state, action) => {
			console.log("update post : ", action.payload.data);
			state.selected.data = action.payload.data;
			state.selected.isLoadig = false;
			state.selected.lastCall = Date.now();

			const index = state.list.findIndex((p) => p.id === action.payload.data.id);
			state.list[index] = action.payload.data;
		});
		builder.addCase(updatePostHandler.rejected, (state, _action) => {
			state.selected.isLoadig = false;
		});

		//delete
		builder.addCase(deletePostHandler.pending, (state, _action) => {
			state.selected.isLoadig = true;
		});
		builder.addCase(deletePostHandler.fulfilled, (state, action) => {
			state.selected.isLoadig = false;
			state.selected.lastCall = Date.now();

			const index = state.list.findIndex((p) => p.id === action.payload.data.id);
			state.list.splice(index, 1);
		});
		builder.addCase(deletePostHandler.rejected, (state, _action) => {
			state.selected.isLoadig = false;
		});
	},
});

export const getAllPosts = (state: any) => state.posts.list;
export const getSelectedPost = (state: any) => state.posts.selected.data;
