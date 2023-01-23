import HTTPService from "@providers/HTTPService";

export async function loginCAPI(email: string, password: string) {
	try {
		const { data } = await HTTPService.post("loginApi", {
			email,
			password,
		});
		return data;
	} catch (error) {
		console.log("error on login ...!");
	}
}

export async function logOutCAPI() {
	try {
		const { data } = await HTTPService.delete("loginApi");
		return data;
	} catch (error) {
		console.log("error on login ...!");
	}
}
