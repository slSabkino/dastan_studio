import RootLayout from "@layouts/layout";
import { RecoilRoot } from "recoil";
// import Interceptor from "@providers/interceptor";

import "milligram";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
	return (
		<RecoilRoot>
			{/* <Interceptor> */}
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
			{/* </Interceptor> */}
		</RecoilRoot>
	);
}
