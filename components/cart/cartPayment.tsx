import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './checkoutForm';
import { Grid, Spacer } from '@nextui-org/react';
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CartPayment = ({ clientSecret, total, setCheckoutModeHandler }) => {
	return (
		<>
			{clientSecret && (
				<>
					<Spacer></Spacer>
					<Elements stripe={stripePromise}>
						<CheckoutForm
							clientSecret={clientSecret}
							total={total}
							setCheckoutModeHandler={setCheckoutModeHandler}
						/>
					</Elements>
				</>
			)}
		</>
	);
};

export default CartPayment;
