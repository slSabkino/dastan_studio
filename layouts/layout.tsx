/* eslint-disable @next/next/no-head-element */

import Head from "next/head";
import FooterMain from "./FooterMain";
import HeaderMain from "./HeaderMain";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="page">
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0 "
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="theme-color" content="#030521" />
			</Head>
			<HeaderMain />
			<div className="base_layout">{children}</div>
			<FooterMain />
		</div>
	);
}
