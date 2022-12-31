import Stripe from 'stripe';
const createPaymentIntent = async (order) => {
	const stripe = new Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx', {
		apiVersion: '2022-11-15',
	});
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
