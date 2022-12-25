import { PrismaClient } from '@prisma/client';
import { CategoresItems, Items } from './data.mjs';
const prisma = new PrismaClient();

async function main() {
	await prisma.item.createMany({
		data: Items,
		skipDuplicates: true,
	});
	await prisma.category.createMany({
		data: Object.keys(CategoresItems).map((name, id) => {
			return { name, id };
		}),
		skipDuplicates: true,
	});

	const categoriesOnItems = await Promise.all(
		Object.keys(CategoresItems)
			.map((categoryName, categoryId) => {
				return CategoresItems[categoryName].map(async (item) => {
					const foundItem = await prisma.item.findFirst({
						where: {
							name: item.name,
						},
					});
					return {
						categoryId,
						itemId: foundItem.id,
					};
				});
			})
			.flat()
	);

	await prisma.categoriesOnItems.createMany({
		data: categoriesOnItems,
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
