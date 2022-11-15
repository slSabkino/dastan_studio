// const {PrismaClient} requaire "@prisma/client";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.create({
		data: { first_name: "saeed", last_name: "latifi" },
	});
	console.log(user);
}

main()
	.then(() => {
		console.log("success");
	})
	.catch((e) => {
		console.log("Err : ", e);
	})
	.finally(async () => {
		await prisma.$disconnect;
	});
