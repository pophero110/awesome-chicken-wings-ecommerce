import { PrismaClient } from '@prisma/client';
import { CategoresItems } from './data.mjs';
const prisma = new PrismaClient();

async function main() {
	await prisma.item.createMany({
		data: Object.values(CategoresItems)
			.flat()
			.map((item, id) => {
				return {
					id,
					name: item.name,
					price: item.price,
				};
			}),
		skipDuplicates: true,
	});

	await prisma.category.createMany({
		data: Object.keys(CategoresItems).map((name, id) => {
			return {
				id,
				name,
			};
		}),
		skipDuplicates: true,
	});

	await prisma.categoriesOnItems.createMany({
		data: Object.keys(CategoresItems)
			.map((cName, categoryId) => {
				return CategoresItems[cName].map((iName, itemId) => {
					return {
						categoryId,
						itemId,
					};
				});
			})
			.flat(),
		skipDuplicates: true,
	});
}
main()
	.then(async () => {
		await prisma.$disconnect();
		console.log('seeding finished');
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
