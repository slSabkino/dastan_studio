import { configureStore } from "@reduxjs/toolkit";
import mainreducer from "./mainreducer";

export default function baseStore() {
	return configureStore({ reducer: mainreducer });
}
