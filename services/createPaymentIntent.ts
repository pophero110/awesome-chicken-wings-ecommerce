const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (order) => {
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

export default createPaymentIntent;
