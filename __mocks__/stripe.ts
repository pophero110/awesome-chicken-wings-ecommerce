const Stripe: {
	prototype;
} = jest.createMockFromModule('stripe');

const createPaymentIntentMock = () => {
	return { client_secret: 'clientSecret' };
};

Stripe.prototype.paymentIntents = {
	create: createPaymentIntentMock,
};

export default Stripe;
