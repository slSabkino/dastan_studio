/* eslint-disable @next/next/no-head-element */
// import "../public/main.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0 "
				/>
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="theme-color" content="#030521" />
				<link rel="stylesheet" href="./main.css" />
				<title>دستان</title>
			</head>
			<body>
				<div className="page">
					<div className="main">{children}</div>
				</div>
			</body>
		</html>
	);
}
