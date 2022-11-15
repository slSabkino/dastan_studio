import { SessionProvider } from "next-auth/react";
import RootLayout from "@layouts/layout";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
	return (
		// <SessionProvider session={session}>
		<SessionProvider session={pageProps.session}>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</SessionProvider>
	);
}
