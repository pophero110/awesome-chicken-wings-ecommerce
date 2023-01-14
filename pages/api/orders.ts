import type { NextApiRequest, NextApiResponse } from 'next';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import CreateOrder from '../../services/createOrder';
import {
	createPaymentIntent,
	updatePaymentIntent,
} from '../../utils/paymentIntent';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';
const orderHandler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { itemsData, checkoutMode } = req.body;
		const session = await unstable_getServerSession(req, res, authOptions);
		const userId = session ? session.user.name : null;
		const service = new CreateOrder({ itemsData, checkoutMode, userId });
		const order = await service.process();

		if (order.error) {
			return res.status(400).json({
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

			return res.status(200).json({
				subtotal: order.subtotal,
				total: order.total,
				clientSecret: paymentIntent.client_secret,
			});
		} else {
			destroyCookie({ res }, 'paymentIntentId');
			destroyCookie({ res }, 'clientSecret');
			res.status(200).json({
				message: 'Order was created successfully',
			});
		}
	}
};

export default orderHandler;
