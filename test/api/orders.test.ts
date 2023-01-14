import orderHandler from '../../pages/api/orders';
import prisma from '../../lib/prisma';

jest.mock('next-auth');
let body = {
	itemsData: {},
	checkoutMode: false,
};
let req;
let res;
let json;
let status;
beforeAll(async () => {
	await prisma.item.createMany({
		data: [
			{ id: 0, price: 15.25, name: 'Chicken Sandwich' },
			{ id: 1, price: 9.25, name: 'Beef Sandwich' },
		],
		skipDuplicates: true,
	});
	json = jest.fn();

	status = jest.fn(() => {
		return {
			json,
		};
	});
	res = {
		status,
	};
});
beforeEach(() => {
	status.mockClear();
	json.mockClear();
});

afterAll(async () => {
	await prisma.order.deleteMany();
});

test('with correct input', async () => {
	body.itemsData = {
		0: 1,
	};
	req = {
		method: 'POST',
		body: body,
	};

	await orderHandler(req, res);

	expect(status.mock.calls[0][0]).toBe(200);
	expect(json.mock.calls[0][0].subtotal).toBe(15.25);
	expect(json.mock.calls[0][0].total).toBe(15.25);
	expect(json.mock.calls[0][0].clientSecret).toBe('clientSecret');
});

test('with empty itemsData', async () => {
	body.itemsData = {};

	req = {
		method: 'POST',
		body: body,
	};

	await orderHandler(req, res);

	expect(status.mock.calls[0][0]).toBe(200);
	expect(json.mock.calls[0][0].subtotal).toBe(0);
	expect(json.mock.calls[0][0].total).toBe(0);
	expect(json.mock.calls[0][0].clientSecret).toBe('clientSecret');
});
