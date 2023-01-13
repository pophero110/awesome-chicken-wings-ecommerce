const Stripe: {
	prototype;
} = jest.createMockFromModule('stripe');

const createPaymentIntentMock = () => {
	return { client_secret: 'clientSecret' };
};

const updatePaymentIntent = () => {
	return { client_secret: 'clientSecret' };
};

Stripe.prototype.paymentIntents = {
	create: createPaymentIntentMock,
	update: updatePaymentIntent,
};

export default Stripe;
