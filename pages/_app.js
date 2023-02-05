import RootLayout from "@layouts/layout";
import { RecoilRoot } from "recoil";
import Interceptor from "@providers/interceptor";
import { ToastContainer } from "react-toastify";
import baseStore from "@store/baseStore";
import { Provider } from "react-redux";

import "react-toastify/dist/ReactToastify.css";
import "milligram";
import "../styles/main.css";

const store = baseStore();

export default function App({ Component, pageProps }) {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}
