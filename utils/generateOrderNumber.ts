import prisma from '../lib/prisma';
const generateOrderNumber = async () => {
	let orderNumber = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	for (var i = 0; i < 5; i++) {
		orderNumber += characters.charAt(Math.floor(Math.random() * 5));
	}
	const existedNumber = await prisma.order.findUnique({
		where: {
			//@ts-ignore
			orderNumber,
		},
	});

	if (existedNumber) {
		return generateOrderNumber();
	}

	return orderNumber;
};

export default generateOrderNumber;
