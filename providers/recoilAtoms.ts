import { iUser } from "@models/interfaceUser";
import { atom } from "recoil";

export enum tokenState {
	loading,
	notoken,
	hasToken,
}

export const noUserInfo: iUser = {
	firstName: "",
	lastName: "",
	username: "",
	phone: "",
	email: "",
};

export const userAtom = atom({
	key: "userAtom",
	default: noUserInfo,
});

export const tokenAtom = atom({
	key: "tokenAtom",
	default: tokenState.loading,
});
