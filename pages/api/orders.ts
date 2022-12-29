import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import CalculateOrderTotal from '../../services/calculateOrderTotal';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { itemsData } = req.body;
		const itemsId = Object.keys(itemsData).map((id) => parseInt(id));
		if (!itemsId.length) {
			res.status(400).json({
				error: 'No item has been selected',
			});
		}
		const items = await prisma.item.findMany({
			where: {
				id: { in: itemsId },
			},
		});

		const lineItemsData = items.map((item) => {
			return {
				unitPrice: item.price,
				quantity: itemsData[item.id.toString()],
				itemId: item.id,
			};
		});

		//@ts-ignore
		const orderData = CalculateOrderTotal(lineItemsData);
		if (req.body.checkoutMode) {
			try {
				const order = await prisma.order.create({
					data: {
						...orderData,
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
				res.status(200).json({ ...order });
			} catch (e) {
				if (e instanceof Prisma.PrismaClientKnownRequestError) {
					// The .code property can be accessed in a type-safe manner
					res.status(400).json(e.message);
				}
				throw e;
			}
		} else {
			res.status(200).json({ ...orderData });
		}
	}
};

export default handler;
