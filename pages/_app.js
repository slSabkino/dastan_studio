import RootLayout from "@layouts/layout";
import { RecoilRoot } from "recoil";
import Interceptor from "@providers/interceptor";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "milligram";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Interceptor>
				<RootLayout>
					<ToastContainer
						position="bottom-right"
						className="my-toast-container"
					/>
					<Component {...pageProps} />
				</RootLayout>
			</Interceptor>
		</RecoilRoot>
	);
}
