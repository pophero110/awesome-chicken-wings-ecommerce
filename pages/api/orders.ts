import { Prisma } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import calculateOrderTotal from '../../services/calculateOrderTotal';
import createPaymentIntent from '../../services/createPaymentIntent';
import generateOrderNumber from '../../utils/generateOrderNumber';
import { parseCookies } from 'nookies';

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

		const orderNumber = await generateOrderNumber();
		//@ts-ignore
		const orderData = calculateOrderTotal(lineItemsData);
		let { clientSecret } = parseCookies({ req });
		if (!clientSecret) {
			const paymentIntent = await createPaymentIntent({
				...orderData,
				orderNumber,
			});
			clientSecret = paymentIntent.client_secret;
		}
		if (req.body.checkoutMode) {
			try {
				await prisma.order.create({
					data: {
						...orderData,
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

				res.status(200).json({
					...orderData,
					clientSecret,
				});
			} catch (e) {
				if (e instanceof Prisma.PrismaClientKnownRequestError) {
					// The .code property can be accessed in a type-safe manner
					res.status(400).json(e.message);
				}
				throw e;
			}
		} else {
			res.status(200).json({ ...orderData, orderNumber, clientSecret });
		}
	}
};

export default handler;
