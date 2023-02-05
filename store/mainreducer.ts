import { combineReducers } from "redux";
import { postSlice } from "./postStore";

const mainReducer = combineReducers({ posts: postSlice.reducer });
export default mainReducer;
