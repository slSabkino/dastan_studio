import { atom } from "recoil";

export enum loginState {
	hasToken,
	noToken,
	loading,
}

export const noUser = {
	id: null,
	firstName: "",
	lastName: "",
	username: "",
	phone: "",
	email: "",
	permissionLevel: 0,
	RegisterDate: "",
	cityId: null,
};

export const tokenAtom = atom({
	key: "tokenAtom",
	default: loginState.loading,
});

export const userAtom = atom({
	key: "userAtom",
	default: noUser,
});
