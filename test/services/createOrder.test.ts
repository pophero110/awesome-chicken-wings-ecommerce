import CreateOrder from '../../services/createOrder';
import { deleteAllRecords } from '../helpers/prisma';
import prisma from '../../lib/prisma';
describe('process', () => {
	let order;
	let checkoutMode = false;
	let userId = 7;
	const itemsData = {
		0: 1,
		1: 1,
	};
	beforeAll(async () => {
		await prisma.user.create({
			data: {
				id: userId,
				email: 'test@gmail.com',
				passwordHash: 'test',
			},
		});
		await prisma.item.createMany({
			data: [
				{ id: 0, price: 15.25, name: 'Chicken Sandwich' },
				{ id: 1, price: 9.25, name: 'Beef Sandwich' },
			],
			skipDuplicates: true,
		});

		const service = new CreateOrder({ itemsData, checkoutMode, userId });
		order = await service.process();
	});
	afterAll(() => {
		return deleteAllRecords();
	});

	test('it returns object with subtotal and total properties', () => {
		expect(order.subtotal).toBe(24.5);
		expect(order.total).toBe(24.5);
	});

	test('it does not save any data into database', async () => {
		const orderData = await prisma.order.findMany();

		expect(orderData.length).toBe(0);
	});

	describe('checkMode is true', () => {
		beforeAll(async () => {
			checkoutMode = true;
			const service = new CreateOrder({
				itemsData,
				checkoutMode,
				userId,
			});
			await service.process();
		});

		test('it saves order into database', async () => {
			const orderData = await prisma.order.findMany();

			expect(orderData.length).toBe(1);
		});
	});
});
