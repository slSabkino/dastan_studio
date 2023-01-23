import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "cookies-next";
import { onUserLogin, tokenValidator } from "@utilities/userAuth";

export default async function apiHandler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "GET": {
			tokenValidator(req.cookies?.token as string);
			res.json({ cookie: req.cookies });
			break;
		}

		case "POST": {
			try {
				const acount = await onUserLogin(req.body);
				if (acount) {
					setCookie("token", acount.token, {
						req,
						res,
						maxAge: 60 * 60 * 12 * 30,
						domain: "localhost",
						path: "/",
						sameSite: false,
						httpOnly: false,
						secure: false,
					});
					res.json({ state: true, acount: acount.user });
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

		default: {
			res.json({ error: "not supported method" });
			break;
		}
	}
}
