import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	const items = [...Array(15)].map((e, index) => {
		return {
			id: index,
			name: `${(index + 1) * 5}PC Chicken Wings`,
			price: index * 5,
		};
	});

	await prisma.item.createMany({
		data: items,
		skipDuplicates: true,
	});

	const categories = [
		'Sandwich',
		'Hamburger',
		'Salad',
		'Side Order',
		'Wings',
		'Philly Steak',
		'Shrimp',
		'Seafood Boil',
		'Chicken Tender',
		'Fish',
		'Fried Rice',
	].map((name, id) => {
		return {
			id,
			name,
		};
	});

	await prisma.category.createMany({
		data: categories,
		skipDuplicates: true,
	});

	const categoriesOnItems = items.map((item) => {
		return {
			categoryId: 4,
			itemId: item.id,
		};
	});

	await prisma.categoriesOnItems.createMany({
		data: categoriesOnItems,
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
