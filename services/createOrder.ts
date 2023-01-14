import prisma from '../lib/prisma';
import { Prisma } from '@prisma/client';
class CreateOrder {
	itemsData: {};
	checkoutMode: boolean;
	userId: any;
	constructor({ itemsData, checkoutMode, userId }) {
		this.itemsData = itemsData;
		this.checkoutMode = checkoutMode;
		this.userId = userId;
	}

	async process() {
		const itemsId = Object.keys(this.itemsData).map((id) => parseInt(id));
		const items = await prisma.item.findMany({
			where: {
				id: { in: itemsId },
			},
		});

		const lineItemsData = items.map((item) => {
			return {
				unitPrice: item.price,
				quantity: this.itemsData[item.id.toString()],
				itemId: item.id,
			};
		});
		const { subtotal, total } = this.calculateOrderTotal(lineItemsData);
		const orderNumber = await this.generateOrderNumber();
		if (this.checkoutMode) {
			try {
				await prisma.order.create({
					data: {
						subtotal,
						total,
						userId: this.userId,
						//@ts-ignore
						orderNumber,
						lineItem: {
							createMany: {
								data: lineItemsData,
							},
						},
					},
					include: {
						lineItem: true,
					},
				});
			} catch (e) {
				if (e instanceof Prisma.PrismaClientKnownRequestError) {
					// The .code property can be accessed in a type-safe manner
					return { error: e.message };
				}
			}
		}

		return { subtotal, total };
	}

	calculateOrderTotal(lineItems) {
		const subtotal = parseFloat(
			lineItems
				.reduce((acc, cur) => {
					//@ts-ignore
					return acc + cur.quantity * cur.unitPrice;
				}, 0)
				.toFixed(2)
		);
		const total = subtotal;

		return { subtotal, total };
	}

	generateOrderNumber = async () => {
		let orderNumber = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
		for (var i = 0; i < 5; i++) {
			orderNumber += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		const existedNumber = await prisma.order.findUnique({
			where: {
				//@ts-ignore
				orderNumber,
			},
		});

		if (existedNumber) {
			return this.generateOrderNumber();
		}

		return orderNumber;
	};
}

export default CreateOrder;
