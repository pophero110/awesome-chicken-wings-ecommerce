import type { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies, setCookie } from 'nookies';
import CreateOrder from '../../services/createOrder';
import {
	createPaymentIntent,
	updatePaymentIntent,
} from '../../utils/paymentIntent';
const orderHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { itemsData, checkoutMode } = req.body;
		const service = new CreateOrder(itemsData, checkoutMode);
		const order = await service.process();

		if (order.error) {
			res.status(400).json({
				error: order.error,
			});
		}
		if (!checkoutMode) {
			let paymentIntent;
			let { clientSecret, paymentIntentId } = parseCookies({ req });
			if (!clientSecret) {
				paymentIntent = await createPaymentIntent(order);
				setCookie({ res }, 'paymentIntentId', paymentIntent.id);
			} else {
				paymentIntent = await updatePaymentIntent(
					paymentIntentId,
					order
				);
			}

			res.status(200).json({
				subtotal: order.subtotal,
				total: order.total,
				clientSecret: paymentIntent.client_secret,
			});
		}
	}
};

export default orderHandler;
