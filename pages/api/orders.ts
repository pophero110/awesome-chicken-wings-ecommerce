import type { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies } from 'nookies';
import CreateOrder from '../../services/createOrder';
import createPaymentIntent from '../../utils/createPaymentIntent';
const orderHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { itemsData, checkoutMode } = req.body;
		const service = new CreateOrder(itemsData, checkoutMode);
		const order = await service.process();

		let { clientSecret } = parseCookies({ req });
		if (!clientSecret) {
			const paymentIntent = await createPaymentIntent(order);
			clientSecret = paymentIntent.client_secret;
		}

		if (order.error) {
			res.status(400).json({
				error: order.error,
			});
		}
		res.status(200).json({
			subtotal: order.subtotal,
			total: order.total,
			clientSecret,
		});
	}
};

export default orderHandler;
