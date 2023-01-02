import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15',
});
export const updatePaymentIntent = async (id, order) => {
	const paymentIntent = await stripe.paymentIntents.update(id, {
		amount: order.total * 100,
	});
	return paymentIntent;
};

export const createPaymentIntent = async (order) => {
	const paymentIntent = await stripe.paymentIntents.create(
		{
			amount: order.total * 100,
			currency: 'usd',
			payment_method_types: ['card'],
			statement_descriptor: 'Awesome Chicken* Order',
			metadata: {
				orderId: order.orderNumber,
			},
		},
		{
			idempotencyKey: order.orderNumber,
		}
	);
	return paymentIntent;
};
