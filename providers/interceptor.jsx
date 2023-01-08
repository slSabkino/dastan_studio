import { useRouter } from "next/router";
import HTTPService from "./HTTPService";

export default function Interceptor({ children }) {
	const router = useRouter();

	// HTTPService.interceptors.response.use(null, (error) => {
	// 	console.log("intercept err ", error);
	// 	let notFound = error?.response.status === 404;
	// 	if (notFound) {
	// 		console.log("404 err");
	// 		router.push("/404");
	// 	} else {
	// 		return Promise.reject(error);
	// 	}
	// });

	return <>{children}</>;
}
