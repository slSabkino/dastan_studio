import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import { onUserLogin } from "@providers/userAuth";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			res.json({ cookie: req.cookies });
			break;
		}

		case "POST": {
			try {
				const token = await onUserLogin(req.body);
				if (token) {
					setCookie("token", token, {
						req,
						res,
						maxAge: 60 * 60 * 12 * 30,
						domain: "localhost",
						path: "/",
						sameSite: false,
						httpOnly: false,
						secure: false,
					});
					res.json({ state: true, token });
				} else {
					res.json({
						state: false,
						error: "not valid login",
					});
				}
			} catch (error) {
				res.json({ state: false, error });
			}
			break;
		}

		case "DELETE": {
			try {
				setCookie("token", "", {
					req,
					res,
					// maxAge: 0,
					expires: new Date(0),
					domain: "localhost",
					path: "/",
					sameSite: false,
					httpOnly: false,
					secure: false,
				});
				res.json({ state: true });
			} catch (error) {
				console.log(error);
				res.json({ state: false, error });
			}
			break;
		}

		default: {
			res.json({ error: "not supported method" });
			break;
		}
	}
}
