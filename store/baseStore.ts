import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./mainReducer";

const store = configureStore({ reducer: mainReducer });

export default function baseStore() {
	return store;
}

export type AppDispatch = typeof store.dispatch;
