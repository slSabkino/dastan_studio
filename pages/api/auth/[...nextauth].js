import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "account",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "your username : ",
				},
				password: {
					label: "Password",
					type: "password",
					value: "",
					placeholder: "your Password : ",
				},
			},

			async authorize(credentials, req) {
				const prisma = new PrismaClient();
				const req_user = await prisma.user.findFirst({
					where: { first_name: "saeedr" },
				});

				console.log("req_user : ", req_user);

				console.log("credentials : ", credentials);
				console.log("credentials req : ", req);
				const user = {
					id: "1",
					name: "J Smith",
					email: "jsmith@example.com",
				};

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user;
				}
			},
		}),
	],
};

export default NextAuth(authOptions);

const asd = {
	credentials: {
		csrfToken: "1bb99ce08bcaa62cc7b9c9fa73118cc6289c69aee37c82dec88d6fc3d4499573",
		username: "asdasd",
		password: "1100218580",
	},
	req: {
		query: {},
		body: {
			csrfToken: "1bb99ce08bcaa62cc7b9c9fa73118cc6289c69aee37c82dec88d6fc3d4499573",
			username: "asdasd",
			password: "1100218580",
		},
		headers: {
			host: "localhost:3000",
			"user-agent":
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0",
			accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
			"accept-language": "en-US,en;q=0.5",
			"accept-encoding": "gzip, deflate, br",
			"content-type": "application/x-www-form-urlencoded",
			"content-length": "110",
			origin: "http://localhost:3000",
			dnt: "1",
			connection: "keep-alive",
			referer: "http://localhost:3000/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F",
			cookie: "next-auth.csrf-token=1bb99ce08bcaa62cc7b9c9fa73118cc6289c69aee37c82dec88d6fc3d4499573%7C255f8b9926ea3ab18e85aec27814c3c7ac8692b7c53e90d69ef3f5fdb1d675c1; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2F",
			"upgrade-insecure-requests": "1",
			"sec-fetch-dest": "document",
			"sec-fetch-mode": "navigate",
			"sec-fetch-site": "same-origin",
			"sec-fetch-user": "?1",
		},
		method: "POST",
	},
};
